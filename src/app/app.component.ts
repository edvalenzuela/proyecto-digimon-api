import { Component } from '@angular/core';
import { ArregloDigimon } from './../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public digimones: Array<ArregloDigimon>; //declaro una variable arreglo de los datos de la interfaz

 mostrarPokemonOrigen(digimones: Array<ArregloDigimon>):void{//metodo que retorna un array de digimon interfaz
  if(this.digimones !== digimones){//Si es distinto lo igualo al parametro entrada
    this.digimones = digimones;
  }

 }
}
