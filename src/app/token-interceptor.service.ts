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

    

    let authService = this.injector.get(AuthenticationService)
    let tokenizedReq = req.clone({
      setHeaders:{
         Authorization: `Bearer ${authService.getToken()}`
      }
    })
      
    return next.handle(tokenizedReq)
    
  }
}
