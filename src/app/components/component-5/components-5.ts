import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared-service';

@Component({
     selector: 'app-components-5',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './components-5.html',
     styleUrl: './components-5.scss',

})
export class Components5 implements OnInit {
     constructor(private _sharedService: SharedService) { }

     ngOnInit(): void {
        
     }

     public sendData(param:string): void {
          this._sharedService.updateUserData(param);
     }
}