import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesComponent } from "./heroes/heroes.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
  declarations:[
      //Añado el nombre de las clases de esta carpeta "Heroe"
    HeroesComponent,
    ListadoComponent
  ],
  exports:[
    //Las exporto para que el modulo principal pueda funcionar con ellos.
    HeroesComponent,
    ListadoComponent
  ],
  imports:[
    //Siempre
    CommonModule
  ]
})

export class HereoModule{}
