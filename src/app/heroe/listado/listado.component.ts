import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes:string[]=["Spiderman","Ironman","Thor","Capitan America","Atman"];
  heroeBorrado:string |undefined;
  heroesBorrados:string[]=[];

  borrar(){
   this.heroeBorrado=this.heroes.pop();
   console.log(typeof this.heroeBorrado);
   this.heroesBorrados.push(String(this.heroeBorrado));
  }

}
