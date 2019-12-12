import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../register/registerModel';@Injectable({ providedIn: 'root' })


export class OverviewService {
    constructor(private httpClient: HttpClient
        ){}

    overview(): Observable<[]>
    {
        return this.httpClient.get<any>(`http://localhost:3000/overview`);

    }
}
