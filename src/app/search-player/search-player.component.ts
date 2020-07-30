import { Component, OnInit } from '@angular/core';
import { BatsmanScoreService } from '../_service/batsman_scoreService';
import { Observable, Subject } from 'rxjs';
import { Player } from './player'
import { DataService } from '../_service/dataService';
import { BatsmanScoreComponent } from '../batsman-score/batsman-score.component'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchPlayerService } from '../_service/search-player.service';
import { PlayerInfo } from './playerInfo';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  playerList: Player[]
  playerinfo : PlayerInfo
  countrylist: any
  check: any
  searchPlayer: FormGroup;
  runs: number;
  balls: number;
  wickets: number;
  stumping: number;
  cathces: number;
  value : boolean;


  
  constructor(private search: SearchPlayerService, private dataService: DataService) {

  }

  ngOnInit() {

    // this.dataService.subject.subscribe(val => {
    //   // console.log('search' + val);
    //   this.playerList = val;



    // })
    this.searchPlayer = new FormGroup({
      search: new FormControl('', Validators.required),
      //team2 : new FormControl('', Validators.required)

    });
  }

  onSubmit() {

    this.dataService.subject.subscribe(val => {
      console.log('search' + val);
      this.playerList = val;



    })
    // this.search.search(this.searchPlayer.controls.search.value).subscribe(res => {

    //   if (res) {
    //    this.value =true; 
    //     this.playerinfo=res;
       
    //   }
    // })

  }


}





