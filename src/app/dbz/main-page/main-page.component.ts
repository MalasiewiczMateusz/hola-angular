import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/bdz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService:DbzService) {
    dbzService.sa
  }

  ngOnInit(): void {
  }

  personajes:Personaje[]=[
    {
      nombre:"Goku",
      poder:2500
    },
    {
      nombre:"Vegeta",
      poder:24000,
    }
  ];

  nuevo:Personaje={
    nombre:"",
    poder:0
  }

  agregarNuevoPersonaje(personaje:Personaje):void{
    console.log("Componente padre",personaje);
  }

}
