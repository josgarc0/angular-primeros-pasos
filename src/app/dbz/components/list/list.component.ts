import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelCharacter: EventEmitter<string> = new EventEmitter();



  @Input()
  public CharacterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  //onDeleteCharacter(index: number ):void{
  //    console.log({index})
//
 // }

  onDeleteCharacter(id?: string):void{
    if ( !id) return;
    this.onDelCharacter.emit(id);
      }
}
