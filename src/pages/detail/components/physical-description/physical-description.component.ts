import { Component, Input } from '@angular/core';
import { CharacterPhysicalDescription } from '../../../../core/models/character';

@Component({
  selector: 'app-physical-description',
  templateUrl: './physical-description.component.html',
  styleUrls: ['./physical-description.component.scss']
})
export class PhysicalDescriptionComponent {
  @Input() physicalDescription: CharacterPhysicalDescription;
}
