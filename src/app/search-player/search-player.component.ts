import { Component, OnInit } from '@angular/core';
import { BatsmanScoreService } from '../_service/batsman_scoreService';
import { Observable, Subject } from 'rxjs';
import { Player } from './player'
import { DataService } from '../_service/dataService';
import { BatsmanScoreComponent } from '../batsman-score/batsman-score.component'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchPlayerService } from '../_service/search-player.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  playerList : Player[] 
  countrylist:any
  check :any
  searchPlayer : FormGroup; 

  constructor(private search: SearchPlayerService, private dataService :DataService) {
    
   }

  ngOnInit(){

    this.dataService.subject.subscribe(val=>{
      console.log('search'+val);
      this.playerList=val;


     
    })
    this.searchPlayer = new FormGroup({
      search : new FormControl('', Validators.required),
      //team2 : new FormControl('', Validators.required)

    });
  }

    onSubmit(){
      console.log(this.searchPlayer.controls.search.value)
      this.search.search(this.searchPlayer.controls.search.value).subscribe(res=>{
        console.log(res);
      })
      
    }
    

  }





