import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, proName: string): any {
    if(value.length === 0 || filterString === ''){
      return value;
    }

    const resultArray = [];
    for(const item of value){
      if(item[proName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}