import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
     selector: 'app-pagination',
     imports: [CommonModule],
     standalone: true,
     templateUrl: './pagination.html',
     styleUrl: './pagination.scss'
})
export class Pagination {
     @Input() totalItems: number = 0;
     @Input() pageSize: number = 5;
     @Input() currentPage: number = 1;

     @Output() pageChange = new EventEmitter<number>();

     get totalPages(): number {
          return Math.ceil(this.totalItems / this.pageSize);
     }

     changePage(page: number) {
          if (page >= 1 && page <= this.totalPages) {
               this.currentPage = page;
               this.pageChange.emit(this.currentPage);
          }
     }
}
