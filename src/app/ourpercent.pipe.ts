import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ourpercent',
})
export class OurpercentPipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    console.log(value, 'value');
    console.log(args, 'args');

    return value + args[0];
  }
}
