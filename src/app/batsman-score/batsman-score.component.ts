import { Component, OnInit } from '@angular/core';
import { BatsmanScoreService } from '../_service/batsman_scoreService';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatTableDataSource, MatSortHeader} from '@angular/material';
  import { MatPaginator, MatSort } from '@angular/material'

export interface PeriodicElement {
  _id : string,
  total : number
}

@Component({
  selector: 'app-batsman-score',
  templateUrl: './batsman-score.component.html',
  styleUrls: ['./batsman-score.component.css']
})
export class BatsmanScoreComponent implements OnInit {

  displayedColumns:string[] = ['_id','total'];
  dataSource:  MatTableDataSource<PeriodicElement>;

  constructor(private batsman_scoreService: BatsmanScoreService) { }

  ngOnInit() {
    this.batsman_scoreService.score().subscribe(data => {
      if(data)
      {
        this.dataSource= new MatTableDataSource(data);
      }
    })
    
  }

}
