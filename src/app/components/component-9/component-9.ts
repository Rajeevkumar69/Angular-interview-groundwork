import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-component-9',
     imports: [CommonModule],
     templateUrl: './component-9.html',
     styleUrl: './component-9.scss'
})
export class Component9 implements OnInit {

     constructor() { }
     ngOnInit(): void {

     }


     public greeting(){
          console.log(`Hello from component-9`);
     }

}
