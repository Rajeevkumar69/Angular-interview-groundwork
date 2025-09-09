import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api-service';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../shared/directives/directives';

@Component({
     selector: 'app-component-1',
     imports: [CommonModule, HighlightDirective],
     templateUrl: './component-1.html',
     styleUrl: './component-1.scss'
})
export class Component1 implements OnInit {
     public userData: any = null;
     constructor(
          private _apiService: ApiService
     ) { }

     ngOnInit(): void {
          this.getUserData();
     }

     public getUserData() {
          return new Promise((resolve, reject) => {
               this._apiService.getUserData().subscribe({
                    next: ((res) => {
                         if (res) {
                              this.userData = res;
                              resolve(res);
                         }
                    }),
                    error: ((error) => {
                         console.error(error);
                         reject(error);
                    })
               })
          })
     }
}