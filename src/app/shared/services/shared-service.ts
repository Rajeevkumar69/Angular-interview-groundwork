import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
     private userData = new BehaviorSubject<string>(
          localStorage.getItem('userData') || ''
     );
     userData$ = this.userData.asObservable();

     /*
     ^ Observables are for async data streams (like API, events). Subjects are for multicasting data between parts of the app (like component communication).
     */
     public updateUserData(data: string) {
          this.userData.next(data);
          localStorage.setItem('userData', data);
     }
}
