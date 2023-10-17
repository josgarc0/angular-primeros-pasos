import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListComponent {

  public nameHeroe?: string;

  public heroesNames: string[] = ['Spiderman','Ironman','Hulk','Thor']

  removeLastHero():void{
    //const deleteHero = this.heroesNames.pop();
    this.nameHeroe = this.heroesNames.pop();
  }
}
