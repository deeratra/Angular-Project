import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from './_service/authenticationService'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector : Injector) { }

  intercept(req,next){

    console.log('Where am ')

    let authService = this.injector.get(AuthenticationService)
    let tokenizedReq = req.clone({
      setHeaders:{
         Authorization: `Bearer ${authService.getToken()}`
      }
    })
    console.log('token' + tokenizedReq)    
    return next.handle(tokenizedReq)
    
  }
}
