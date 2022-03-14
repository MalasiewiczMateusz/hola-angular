import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  nombre:string="Ironman";
  edad:number=45;

  ngOnInit(): void {
  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${this.nombre}-${this.edad}`
  }

  cambiarNombre():void{
    this.nombre="Spiderman";
  }

  cambiarEdad():void{
    console.log("hola...")
    this.edad=30;
  }
}
