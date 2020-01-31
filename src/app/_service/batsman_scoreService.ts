import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Register } from '../register/registerModel';

@Injectable({ providedIn: 'root' })
export class BatsmanScoreService {

    
    constructor(private httpClient: HttpClient){}

    score(): Observable<[]>
    {

        return this.httpClient.get<any>(`http://localhost:3000/batsman_score`);

    }
}
