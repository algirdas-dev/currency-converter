import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'containsCodes'})
export class ContainsCodesPipe implements PipeTransform {
  transform(value: any[], codes: any[]): any[] {
      return value.filter((v:any) => codes.find(c=>c.code === v.code) )
  } 
}