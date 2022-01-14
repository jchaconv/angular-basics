import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Batman', 'Aquaman', 'Superman', 'Flash', 'Linterna Verde', 'Cyborg', 'Wonder Woman'];

  heroeBorrado: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  //shift() puede retornar un string o undefined,
  //cuando pongo ||'' significa que si retorna undefined
  //deberá asginarse vacío
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
  
}
