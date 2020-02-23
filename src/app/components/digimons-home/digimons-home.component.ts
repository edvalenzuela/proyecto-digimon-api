import { Component, OnInit } from '@angular/core';
import { DigiAPI, ArregloDigimon } from 'src/interfaces';
import { DigimonsService } from 'src/app/services/digimons.service';
import { digimonsModels } from 'src/app/models/digimons';

@Component({
  selector: 'app-digimons-home',
  templateUrl: './digimons-home.component.html',
  styleUrls: ['./digimons-home.component.css']
})
export class DigimonsHomeComponent implements OnInit {
  
  digimons: ArregloDigimon;
  digimonsCargados: boolean;

  constructor(private digimonService: DigimonsService) { }

  ngOnInit(): void {
    this.digimonsCargados = false;
    this.getDigimons();
  }

  getDigimons(): void{
      this.digimonService.getDigimon().subscribe((data: ArregloDigimon) =>{
        this.digimons = data;
        console.log(this.digimons);
        this.digimonsCargados = true;
        
        /*for (var i = 0; i < this.digimons.mounstruos.length; i++) {
          console.log(this.digimons.mounstruos[i]);
          if(this.digimons.mounstruos[i].id === '10'){
            this.digimonsCargados = true;
          }
        }*/

        /*this.digimons.mounstruos.forEach(o => {
          console.log(o);
        });*/
      });
  }

}
