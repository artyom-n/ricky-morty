import { Character, CharacterService } from '../../character.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  characters$: Observable<Character>;

  constructor(private drinkService: CharacterService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.characters$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.drinkService.getCharacter(params.get('id')))
    );
  }
}
