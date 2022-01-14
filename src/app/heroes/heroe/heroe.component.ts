import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Batman';
    edad: number = 35;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    /* Inicio One Way Data Binding */
    cambiarNombre(): void {
        this.nombre = 'Aquaman';
    }


    cambiarEdad(): void {
        this.edad = 30;
    }
    /* Fin One Way Data Binding */

    
}