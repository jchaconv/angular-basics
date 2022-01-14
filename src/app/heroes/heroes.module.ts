import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule, //para usar ngIf, ngFor
        BrowserModule
    ]
})
export class HeroesModule {
    

}