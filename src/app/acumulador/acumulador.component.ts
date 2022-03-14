import { Component } from "@angular/core";

@Component({
  selector:'app-acumulador',
  templateUrl: './acumulador.component.html',

})

export class AcumuladorComponent{
  titulo:string="Contador";

  numero:number=10;

  sumaUno(num:number):void{
    this.numero+=num;
  }

  restaUno(num:number):void{
    this.numero-=num;
  }
}
