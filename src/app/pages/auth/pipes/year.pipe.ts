import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'year',
})
export class YearPipe implements PipeTransform {
  transform(date: Date): string {
    return date.getTime().toFixed();
  }
}
