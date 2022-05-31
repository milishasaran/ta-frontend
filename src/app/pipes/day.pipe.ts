import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
})
export class DayPipe implements PipeTransform {
  transform(value: number) {
    return new Date(new Date(0).setUTCSeconds(value))
      .toDateString()
      .split(' ')[0];
  }
}
