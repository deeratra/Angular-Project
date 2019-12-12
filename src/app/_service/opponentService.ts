import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Register } from '../register/registerModel';

@Injectable({ providedIn: 'root' })


export class OpponentService {
    constructor(private httpClient: HttpClient
        ){}

    opponent(team1: string, team2: string): Observable<[]>
    {
        return this.httpClient.post<any>(`http://localhost:3000/opponent`,{team1, team2});

    }
}
