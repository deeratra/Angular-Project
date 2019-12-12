import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OpponentService } from '../_service/opponentService'

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.css']
})
export class OpponentComponent implements OnInit {

  opponentForm : FormGroup;
  team1 : string;
  team2 : string;
  similar = false;
  submitted = false;
  match = false ;
  matches :string;
  win1 : string;
  win2 : string;
  lose1 : string;
  lose2 : string;
  noresult : string;

  constructor(
    private opponentService : OpponentService
  ) { }

  ngOnInit() {

    this.opponentForm = new FormGroup({
      team1 : new FormControl('', Validators.required),
      team2 : new FormControl('', Validators.required)

    });
  }

  onSubmit(){
    
    this.submitted = true;

    console.log("hi   z"+this.opponentForm.controls.team2.value)
    console.log("hi   z"+this.opponentForm.controls.team1.value)
    if(this.opponentForm.controls.team2.value == this.opponentForm.controls.team1.value)
      {
        console.log("TTTTRRRUEEEE");
        this.similar = true;
        return;
      }
    else
      {
        this.similar = false;
        this.opponentService.opponent(this.opponentForm.controls.team1.value
          , this.opponentForm.controls.team2.value).subscribe(data => {
            if(data)
            {
              this.match=true;
              console.log(data);
              this.matches=data.toString();
            }
            
          })
      }

  }

}
