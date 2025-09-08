import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root'
})
export class DiService {

     constructor() {

     }

     public getUser() {
          return { "userId": 1, "name": 'Rajeev Kumar' }
     }

}
