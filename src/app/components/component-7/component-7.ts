import { Component, OnInit } from '@angular/core';
import { DiService } from '../../shared/services/di-service';

@Component({
     selector: 'app-component-7',
     imports: [],
     templateUrl: './component-7.html',
     styleUrl: './component-7.scss'
})
export class Component7 implements OnInit {
     public userData:any;

     constructor(
          private _DIService:DiService
     ) { 
          /*
          ^ Dependency Injection (DI) in Angular is a design pattern where classes (like components) don’t create their own dependencies. Instead, Angular’s injector provides the required service instance.This makes code reusable, testable, and loosely coupled.

           ! DI Injection
          */
          this.userData = this._DIService.getUser()  
     }

     ngOnInit(): void {
          console.log(this.userData);

     }

}
