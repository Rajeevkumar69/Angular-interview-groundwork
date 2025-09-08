import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
     selector: 'app-component-8',
     imports: [],
     templateUrl: './component-8.html',
     styleUrl: './component-8.scss',
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component8 implements OnInit {
     @Input() user!: { name: string };

     constructor() {

     }

     ngOnInit(): void {
     }

}
