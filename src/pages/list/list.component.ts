import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from '../../core/models/character';
import { RequestService } from '../../core/services/request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  characterList: CharacterInterface[] = [];
  filter: string = '';
  page: number = 1;

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.getCharactersFromAPI(this.page);
  }

  getCharactersFromAPI(page: number) {
    // Control if the page is lower or higher than the minimum and maximum of the api
    if (page < 1) {
      this.page = 1;
    } else if (page > 16){
      this.page = 16;
    }
    
    // Obtain the data from the petition
    this.requestService.getCharacters(this.page).subscribe(
      (data: CharacterResponseInterface) => {
        const results: CharacterInterface[] = data.result;

        const formattedResults = results.map(({id, images}) => ({
          id,
          images,
        }));

        this.characterList = formattedResults;
      }
    );
  }
}
