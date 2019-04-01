import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalDate'
})
export class NormalDatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.substring(0, 10);
  }

}
