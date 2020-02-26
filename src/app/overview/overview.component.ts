import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from './Table';
// import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatTableDataSource, MatSortHeader} from '@angular/material';
  import { MatPaginator, MatSort } from '@angular/material'

import { Router, ActivatedRoute } from '@angular/router';
import { OverviewService} from '../_service/overviewService';
import { HttpErrorResponse } from '@angular/common/http';
import {SelectionModel} from '@angular/cdk/collections';


import { BehaviorSubject } from 'rxjs';

  export interface PeriodicElement {
    id:number
    season:string;
    city:string;
    date:number;
    team1:string;
    team2:string;
    winner:string;
    venue:string;
  }

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  displayedColumns:string[] = ['select','season', 'city', 'date','team-1','team-2','winner','venue'];
  dataSource:  MatTableDataSource<PeriodicElement>;
  selection= new SelectionModel<PeriodicElement>(true,[]);
  data : any;
  city: any;
  arrCity =[];
  del: number[] =[];
  s :any;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  userDisplayName = '';

  constructor(private overviewService: OverviewService,
    private router:Router) { }

  ngOnInit() {
    
    
    this.userDisplayName = localStorage.getItem('name');

    // this.overviewService.Afterrefresh$.subscribe(d => {
    //   this.data =[];
    //   console.log('first subscribe')
    //   this.overviewService.overview();
    // })
    console.log('NgOnit')

    this.overviewService.overview().subscribe(data => {
      if(data)
      {
       //console.log(data);
       console.log(data)
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.data= data;
      }
      else
      console.log('error')
    }),(err => {
      if(err instanceof HttpErrorResponse)
        if(err.status === 401)
          this.router.navigate(['/login'])
    })
  }



  removeSelectedRows(){
    this.selection.selected.forEach(item => {
     // console.log('item'+item.id)
     this.del.push(item.id)
     this.selection.deselect(item);

    })
    console.log(this.del)
    this.overviewService.deleted(this.del).subscribe(res=>{
      console.log(res)
      if(res === 'delete')
      {
        this.del= [];
        this.ngOnInit();
      }
      else
      {
        this.del= [];
        console.log('Unable to delete')
      }
      
      console.log(this.del)
    })
    
    //this.overviewService.Afterrefresh.next(true);
    }

  
    
  //   this.overviewService.overview().subscribe(data=>{
  //     if(data)
  //     {
  //      //console.log(data);
  //       this.dataSource= new MatTableDataSource(data);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       this.data= data;
  //     }

  //     else
  //     console.log("not done");
  //   }),(err => {
  //     if(err instanceof HttpErrorResponse)
  //       if(err.status === 401)
  //         this.router.navigate(['/'])

  //   })
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  
      


  masterToggle(){
    this.isAllSelected() ?
      this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.season + 1}`;
  }
  

}


