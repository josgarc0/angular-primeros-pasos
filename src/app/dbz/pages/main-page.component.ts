import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-bz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService){}
    get charactersmain(): Character[] {
      return [...this.dbzService.characters]
    }

onDeleteCharacterMain(id: string) :void{
  this.dbzService.DeleteCharacterByID(id);
}

onNewCharacterMain( charactermain: Character){
  this.dbzService.onNewCharacterPadre(charactermain);

}}
