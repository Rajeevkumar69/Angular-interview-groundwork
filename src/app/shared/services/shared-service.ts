import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
     private userData = new BehaviorSubject<string>(
          localStorage.getItem('userData') || ''
     );
     userData$ = this.userData.asObservable();

     public updateUserData(data: string) {
          this.userData.next(data);
          localStorage.setItem('userData', data);
     }
}
