import { Component, OnInit } from '@angular/core';
import { DigimonsService } from '../../services/digimons.service';

@Component({
  selector: 'app-digimons-buscador',
  templateUrl: './digimons-buscador.component.html',
  styleUrls: ['./digimons-buscador.component.css']
})
export class DigimonsBuscadorComponent implements OnInit {

  buscarDigimon:string;
  digimonsEncontrados:any[]=[];

  constructor(public digimonService:DigimonsService) { }
  
  ngOnInit() {
 
  }

  buscarTodos(){
    //this.buscarDigimon === "" && this.buscarDigimon.length
    if(!this.buscarDigimon){//Si no escriben nada en el buscador entonces retorno vacio
      return;
    }
      this.digimonService.getBuscarPorId(parseInt(this.buscarDigimon)).subscribe(//convierto el string por int
        (respuesta:any)=>{
          this.digimonsEncontrados = respuesta;
          console.log(this.digimonsEncontrados);
        },
        (error:any)=>{
        console.log(error, "No se encontro por el ID",`${this.buscarDigimon}`);//Capturo el id ingresado
        }
      );

      this.digimonService.getBuscarPorNombre(this.buscarDigimon).subscribe(
        (respuesta:any) =>{
          this.digimonsEncontrados = respuesta;
          console.log(this.digimonsEncontrados);
        },
        (error:any)=>{
          console.log(error, "No se encontro por el Nombre",`${this.buscarDigimon}`);//Capturo el id ingresado
        }
      );

      this.digimonService.getBuscarPorNivel(this.buscarDigimon).subscribe(
        (respuesta:any) =>{
          this.digimonsEncontrados = respuesta;
          console.log(this.digimonsEncontrados);
          console.log("cantidad de niveles =>", this.digimonsEncontrados.length);
        },
        (error:any)=>{
          console.log(error, "No se encontro por el Nivel",`${this.buscarDigimon}`);//Capturo el id ingresado
        }
      );
    
}

}
