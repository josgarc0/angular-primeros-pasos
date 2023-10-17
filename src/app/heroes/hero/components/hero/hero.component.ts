import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string="ironman";
  public age:number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  CambiarNombre(  ):void {
    this.name = 'Hulk';
  }

  CambiarEdad( )  :void {
    this.age = 16;
  }

  resetForm( )  :void {
    //this.name = "ironman";
    this.age = 45;

    //document.querySelector('h1')!.innerHTML='<h1>DEsde Angular</h1>';
    //document.querySelectorAll('h1')!.forEach( element => {element.innerHTML='<h1>DEsde Angular</h1>';})
  }


}
