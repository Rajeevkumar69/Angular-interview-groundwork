import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
     selector: 'app-component-11',
     imports: [CommonModule],
     styleUrls: ['./component-11.scss'],
     template: `
     <h2>Hello from component-11</h2>
     <p> Message:-  {{message}} </p>
     `
})
export class Component11 implements OnInit, OnChanges, OnDestroy {
     @Input() message!: string;
     constructor() { }

     ngOnInit(): void {
          console.log(`Component Init`);
     }

     ngOnChanges(changes: SimpleChanges): void {
          console.log(`OnChanges Init`, changes);
     }

     ngOnDestroy(): void {
          console.log(`Init Just Before Component Destroy`);
     }
}
