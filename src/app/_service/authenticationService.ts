import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    constructor(private httpClient : HttpClient,
      private router: Router){

    }

    login(username:string, password:string)
    {        
        return this.httpClient.post<any>(`http://localhost:3000/login`,{username,password})
     
    }

    loggedIn()
    {
      console.log('Checking for boolean value of token')
      return !!localStorage.getItem('token')
    }
    getToken(){
    return localStorage.getItem('token')
    }

    loggedOut()
    {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      this.router.navigate(['/'])
    }
}