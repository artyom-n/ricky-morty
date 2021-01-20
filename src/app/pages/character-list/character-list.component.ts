import { Character, CharacterService } from '../../character.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters$ = this.characterService.getCharacters();
  }
}
