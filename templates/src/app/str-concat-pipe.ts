import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strConcat',
})
export class StrConcatPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    if (args) return args.concat(value);
    return value;
  }
}
