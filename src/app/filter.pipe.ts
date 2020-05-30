import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): unknown {
    console.log(value, 'value');
    console.log(args, 'args');
    return value.filter((data) => data.status == args[0]);
  }
}
