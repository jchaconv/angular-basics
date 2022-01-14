import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //personajesMain: Personaje[] = [];

  /* cambiarNobre(event: any) {
    console.log(event.target.value);
  } */

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 500,
  };

  /* get personajes(): Personaje[]{
    return this.dbzService.personajes;
  } */


  //agregarNuevoPersonaje( argumento: Personaje){
    //debugger;
    //console.log(argumento);
    //this.personajesMain.push(argumento);
  //}

  /* constructor(private dbzService : DbzService) {
    //this.personajesMain = this.dbzService.personajes;
  } */

  constructor(){
    
  }


}
