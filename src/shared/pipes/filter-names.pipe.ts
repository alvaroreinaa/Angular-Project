import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from '../../core/models/character';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {
  transform(list: CharacterInterface[], filter: string='') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: CharacterInterface[] = list.filter((character: CharacterInterface) => {
      return character.id.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }
}
