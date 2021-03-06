import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/bdz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() personajes:Personaje[]=[];

  @Input() nuevo:Personaje={
    nombre:"",
    poder:0
  }

  @Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter()

  agregar():void{
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
   // console.log(this.nuevo);

   //envio el nuevo personaje al componente padre
   this.onNuevoPersonaje.emit(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
}
