import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Register } from '../register/registerModel';@Injectable({ providedIn: 'root' })


export class OverviewService {

    TableData$ = new BehaviorSubject<any>(null);
    Afterrefresh$ = new BehaviorSubject<any>(null);
    data : any;
    constructor(private http: HttpClient, private httpClient: HttpClient
        ){}

    overview()
    {

        // this.data = this.httpClient.get<any>(`http://localhost:3000/overview/getData`);
        return this.httpClient.get<any>(`http://localhost:3000/overview/getData`);
        //  console.log('overview Service')
        //  this.TableData$.next(this.httpClient.get<any>(`http://localhost:3000/overview/getData`));
        // this.TableData$.next(this.data);
    }

    deleted(id:number[]){
        // console.log(this.http.delete<any>(`http://localhost:3000/overview/delete`))
        console.log(id)
        // console.log('delete service')
        
      return this.httpClient.delete<any>(`http://localhost:3000/overview/delete/${id}`)
            
    }
}
