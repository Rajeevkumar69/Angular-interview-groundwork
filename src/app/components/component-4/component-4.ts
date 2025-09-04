import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
     selector: 'app-component-4',
     imports: [CommonModule,],
     templateUrl: './component-4.html',
     styleUrl: './component-4.scss',
     standalone: true
})
export class Component4 implements OnInit {
     @Input() public userEmail: string = '';

     constructor(

     ) { }

     ngOnInit(): void {
          console.log(this.userEmail);
     }
}
