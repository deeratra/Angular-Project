import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from './Table';
// import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatTableDataSource, MatSortHeader} from '@angular/material';
  import { MatPaginator, MatSort } from '@angular/material'

import { Router, ActivatedRoute } from '@angular/router';
import {OverviewService} from '../_service/overviewService';
import { HttpErrorResponse } from '@angular/common/http';

  export interface PeriodicElement {
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
   displayedColumns:string[] = ['season', 'city', 'date','team-1','team-2','winner','venue'];
  dataSource:  MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  userDisplayName = '';

  constructor(private overviewService: OverviewService,
    private router:Router) { }

  ngOnInit() {
    
    
    this.userDisplayName = localStorage.getItem('name');
    console.log('is thius it' + this.userDisplayName)


    this.overviewService.overview().subscribe(data=>{
      if(data)
      {
        console.log(data);
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

      else
      console.log("not done");
    }),(err => {
      if(err instanceof HttpErrorResponse)
        if(err.status === 401)
          this.router.navigate(['/'])

    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
