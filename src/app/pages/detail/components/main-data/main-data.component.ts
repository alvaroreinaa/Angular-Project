import { Component, Input } from '@angular/core';
import { CharacterInterface} from '../../../../core/models/character';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.scss']
})
export class MainDataComponent {
  @Input() mainData: CharacterInterface;
}
