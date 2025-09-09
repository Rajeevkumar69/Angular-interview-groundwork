import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'upperCase'
})

export class UpperCase implements PipeTransform {
     transform(value: string): any {
          return value.toUpperCase();
     }
}