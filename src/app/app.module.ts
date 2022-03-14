import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { AcumuladorModule } from './acumulador/acumulador.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HereoModule } from './heroe/hereo.module';

@NgModule({
  declarations: [

    AppComponent,
//Añado el nuevo componente (nombre de la nueva clase), lo importa solo arriba:

     //Añado el nombre de la clase que necesite


  ],
  imports: [
    BrowserModule,
      //Importo los módulos creados.
    HereoModule,
    AcumuladorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
