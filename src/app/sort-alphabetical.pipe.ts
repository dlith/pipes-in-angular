import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabetical'
})
export class SortAlphabeticalPipe implements PipeTransform {

  transform(value: any, sortType: string): any {
    if(value.length === 0){
      return value;
    }

    if(sortType === 'asc'){
      return (<Array<string>>value).sort();
    } 

    if(sortType === 'desc'){
      return (<Array<string>>value).sort().reverse();
    }

    return value;
  }

}
