import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'C:/Users/764957/ipl/src/app/_service/authenticationService';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDisplayName ='';

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {

    this.userDisplayName = localStorage.getItem('name');
  }

  
}
