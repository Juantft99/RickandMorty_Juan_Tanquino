import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mundos'
})
export class MundosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
