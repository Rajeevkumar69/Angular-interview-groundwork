import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-pagination',
     imports: [CommonModule],
     templateUrl: './pagination.html',
     styleUrl: './pagination.scss'
})
export class Pagination implements OnInit {
     constructor() { }
     ngOnInit(): void {

     }

}
