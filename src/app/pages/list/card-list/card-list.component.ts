import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() character;
  characterNameClean: string;
  constructor() { }

  ngOnInit(): void {
    this.characterNameClean = this.character.id.replace(/[|&;$%@"<>_()+,]/g, " ");
  }
}
