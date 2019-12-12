import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../register/registerModel';
@Injectable({ providedIn: 'root' })


export class RegistrationService {
    constructor(private httpClient: HttpClient
        ){}

    register(register:Register): Observable<[]>
    {
        return this.httpClient.post<any>(`http://localhost:3000/register`,register);

    }
}

