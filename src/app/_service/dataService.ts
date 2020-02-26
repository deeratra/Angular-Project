import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, Subject } from 'rxjs';


@Injectable({providedIn :'root'})

export class DataService {

    subject =  new BehaviorSubject([])

    data$  = this.subject.asObservable();

}