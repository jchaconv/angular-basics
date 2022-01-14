import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15600,
    },
    {
      nombre: 'Vegeta',
      poder: 12300,
    },
    {
      nombre: 'Gohan',
      poder: 9600,
    },
    {
      nombre: 'Goten',
      poder: 7500,
    },
  ];

  get personajes(): Personaje[] {
      //spread operator
      return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje( personaje : Personaje) {
      this._personajes.push( personaje );

  }
}
