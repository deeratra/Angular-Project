import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, Subject } from 'rxjs';


@Injectable({providedIn :'root'})

export class DataService {

    subject =  new BehaviorSubject([])

    data$  = this.subject.asObservable();

    // func()
    // {
    //         this.data$.subscribe(val =>{
    //             console.log('value'+val);
    //         })
            
            
    // }

  
    


    
    

}