import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api-service';
import { CommonModule } from '@angular/common';
import { Pagination } from '../shared/pagination/pagination';

@Component({
     selector: 'app-component-1',
     imports: [CommonModule, Pagination],
     templateUrl: './component-1.html',
     styleUrl: './component-1.scss'
})
export class Component1 implements OnInit {
     public userData: any = null;
     public currentPage = 1;
     public pageSize = 5;

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

     get paginatedData() {
          const start = (this.currentPage - 1) * this.pageSize;
          return this.userData.slice(start, start + this.pageSize);
     }

     onPageChange(page: number) {
          this.currentPage = page;
     }
}