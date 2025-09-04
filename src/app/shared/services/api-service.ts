import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root'
})
export class ApiService {
     constructor(private _http: HttpClient) { }

     public getUserData() {
          const url = `https://jsonplaceholder.typicode.com/users`;
          return this._http.get(url);
     }
}