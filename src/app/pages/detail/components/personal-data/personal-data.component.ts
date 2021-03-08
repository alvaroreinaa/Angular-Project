import { Component, Input } from '@angular/core';
import { CharacterPersonalData } from '../../../../core/models/character';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {
  @Input() personalData: CharacterPersonalData;
}
