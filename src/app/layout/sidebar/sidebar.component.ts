import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'C:/Users/764957/ipl/src/app/_service/authenticationService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userDisplayName='';

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.userDisplayName = localStorage.getItem('name');
  }

}
