import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Pipe({
  name: 'search',
  standalone:true
})
export class SearchPipe implements PipeTransform {

  transform(value:Iproduct[] ,searchTerm:string): Iproduct[] {

    return value.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
