import { Injectable } from '@angular/core';
import { CanActivate,Router, UrlTree } from '@angular/router';

import { AuthenticationService } from './_service/authenticationService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor
  (  private authService: AuthenticationService,
    private router:Router)
    {}

              canActivate(): boolean
              {
                if(this.authService.loggedIn())
                 { console.log('in can activate for overview')
                   return true}

                
                  else
                  {
                    console.log('2') 
                    this.router.navigate(['/'])
                    return false
                  }
              }
}
