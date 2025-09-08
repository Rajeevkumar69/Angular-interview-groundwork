import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../shared/services/shared-service';

@Component({
     selector: 'app-components-6',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './components-6.html',
     styleUrl: './components-6.scss'
})
export class Components6 implements OnInit, OnDestroy {
     constructor(private _sharedService: SharedService) { }

     ngOnInit(): void {

     }

     ngOnDestroy(): void { }

     public async getUserData() {
          this._sharedService.userData$.subscribe(data =>{
               console.log(`Recived data: ${data}`);
               
          })
     }
}