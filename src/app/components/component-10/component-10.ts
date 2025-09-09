import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Component9 } from '../component-9/component-9';

@Component({
     selector: 'app-component-10',
     imports: [CommonModule, Component9],
     styleUrl: './component-10.scss',
     template:`
     <h2>Hello World! This is component-10</h2>
     <button class="btn btn-primary  ms-4" (click)="callCom9Method()">Click Me!</button>

     <app-component-9></app-component-9>
     `
})
export class Component10 implements OnInit {
     @ViewChild(Component9) component9!:Component9;

     constructor() { }
     ngOnInit(): void {

     }

     public callCom9Method(){
          if(this.component9){
               this.component9.greeting();
          }
     }

}
