import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  currDate = new Date() as any;
  val: any;

  transform(value: any) {
    this.val = new Date(value) as any;

    return new Date(this.currDate - this.val).getHours();
  }
}
