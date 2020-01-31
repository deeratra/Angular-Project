import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPlayerService {

  constructor(private http: HttpClient) { }

  search(name:string){
    console.log('searchservice')
    return this.http.post<any>(`http://localhost:3000/search`,{name});
  }
}
