import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 5000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 15000
  }]

  onNewCharacterPadre( sCharacter: Character):void{
    const newCharacter: Character={  id: uuid(), ...sCharacter };

    this.characters.push(newCharacter)

  }

  //onDelCharacterPadre( sIndex: number):void{
    DeleteCharacterByID ( id:string){
    //this.characters.splice(sIndex,1)
    this.characters = this.characters.filter( sCharacter => sCharacter.id !== id);
  }

}
