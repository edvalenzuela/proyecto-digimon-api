import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DigiAPI, ArregloDigimon } from 'src/interfaces';
import { DigimonsService } from '../../services/digimons.service';

@Component({
  selector: 'app-digimons-home',
  templateUrl: './digimons-home.component.html',
  styleUrls: ['./digimons-home.component.css']
})
export class DigimonsHomeComponent implements OnInit {
  
  //@Output() digiOrigen = new EventEmitter();
  digimons: ArregloDigimon;
  digiAPI : DigiAPI;
  digimonsCargados: boolean;

  constructor(private digimonService: DigimonsService) { }

  ngOnInit(): void {
    this.digimonsCargados = false;
    this.getDigimons();
  }

  getDigimons(): void{
      this.digimonService.getDigimon().subscribe((data: ArregloDigimon) =>{
        this.digimons = data;//Guardo el data del suscribe y lo asocio
        console.log(this.digimons);
        if(this.digimons){
          //this.digiOrigen.emit(this.digimons);
          this.digimonsCargados = true;
        }
        
        //Como ya es una matriz no se puede recorrer, debido al get del service
        //https://stackoverflow.com/questions/53680000/angular-subscribe-push-object-to-array
        /*for (var i = 0; i < this.digimons.mounstruos.length; i++) {
          console.log(this.digimons.mounstruos[i]);
          if(this.digimons.mounstruos[i].id === '10'){
            this.digimonsCargados = true;
          }
        }*/

        /*this.misNuevosDigimons.forEach(o => {
          console.log(o);
        });*/
      });
  }
}
