import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { BatsmanScoreService } from '../_service/batsman_scoreService';
import { DataService } from '../_service/dataService';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatTableDataSource, MatSortHeader} from '@angular/material';
  import { MatPaginator, MatSort } from '@angular/material';
  import { Observable, Subject } from 'rxjs';
  import { Player } from '../search-player/player'
// import { platform } from 'os';
  // import { Injectable } from '@angular/core';

export interface PeriodicElement {
  _id : string,
  total : number
  balls:number
}

@Component({
  selector: 'app-batsman-score',
  templateUrl: './batsman-score.component.html',
  styleUrls: ['./batsman-score.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class BatsmanScoreComponent implements OnInit {

  player: Player[];
  player1: Player[];
  private sub :any 
  displayedColumns:string[] = ['_id','total','balls'];
  dataSource:  MatTableDataSource<PeriodicElement>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private batsman_scoreService: BatsmanScoreService, private dataService:DataService) { }

  ngOnInit() {
    this.sub=this.batsman_scoreService.score().subscribe(data => {
      if(data)
      {
        this.dataSource= new MatTableDataSource(data);
        this.player =data;
        this.dataSource.sort= this.sort;
        this.dataService.subject.next(data);       

        
      }
    })
    
  }

  

}
