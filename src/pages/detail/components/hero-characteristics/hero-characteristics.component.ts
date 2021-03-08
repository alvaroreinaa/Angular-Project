import { Component, Input } from '@angular/core';
import { CharacterHeroCharacteristics } from '../../../../core/models/character';

@Component({
  selector: 'app-hero-characteristics',
  templateUrl: './hero-characteristics.component.html',
  styleUrls: ['./hero-characteristics.component.scss']
})
export class HeroCharacteristicsComponent {
  @Input() heroCharacteristics: CharacterHeroCharacteristics;
}
