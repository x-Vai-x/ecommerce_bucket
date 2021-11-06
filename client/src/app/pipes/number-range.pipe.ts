import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberRange'
})
export class NumberRangePipe implements PipeTransform {

  transform(end: number): number[] {
    return Array(end).fill(1).map((_, i) => i + 1)
  }

}
