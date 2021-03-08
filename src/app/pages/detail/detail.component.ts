import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../core/services/request.service'
import { CharacterHeroCharacteristics, CharacterPhysicalDescription,
         CharacterPersonalData, CharacterInterface} from '../../core/models/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  characterId: string;
  mainData: CharacterInterface;
  heroCharacteristics: CharacterHeroCharacteristics;
  personalData: CharacterPersonalData;
  physicalDescription: CharacterPhysicalDescription;

  constructor(private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit(): void {
    // Get the ID of the character to display in detail 
    this.route.paramMap.subscribe(params => {
      this.characterId = params.get('characterId');
    })

    // Get the data from the specific character
    this.requestService.getSpecificCharacter(this.characterId).subscribe(
      (data) => {
        // Set the null fields into Unknown
        for (const property in data) {
          if (data[property] == null) {
            data[property] = 'Unknown';
          }
        }

        // Assign the attributes to their corresponding interfaces in order 
        // to pass them to their corresponding components
        this.mainData = {
          id: this.characterId.replace(/[|&;$%@"<>_()+,]/g, " "),
          images: data['images'][0]
        }

        this.heroCharacteristics = {
          quirk: data['quirk'],
          affiliation: data['affiliation'],
          teams: data['teams']
        }
        
        this.personalData = {
          alias: data['alias'],
          description: data['description'],
          birthday: data['birthday'],
          status: data['status']
        }
        
        this.physicalDescription = {
          gender: data['gender'],
          height: data['height'],
          hair: data['hair'],
          eye: data['Eye'],
          bloodtype: data['bloodtype']
        }
      }
    )
  }
}
