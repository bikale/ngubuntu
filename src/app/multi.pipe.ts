import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi',
})
export class MultiPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let x = args[0];
    let mystring = ' ';
    for (let i = 0; i < x; i++) {
      mystring = mystring + value + ' ';
    }
    return mystring;
  }
}
