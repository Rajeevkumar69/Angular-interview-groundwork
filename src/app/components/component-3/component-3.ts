import { Component, OnInit } from '@angular/core';
import { Component4 } from '../component-4/component-4';

@Component({
     selector: 'app-component-3',
     imports: [Component4],
     templateUrl: './component-3.html',
     styleUrl: './component-3.scss',
     standalone: true
})
export class Component3 implements OnInit {

     constructor() { }
     ngOnInit(): void {

     }
}
