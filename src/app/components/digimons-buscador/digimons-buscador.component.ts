import { Component, OnInit } from '@angular/core';
import { DigimonsService} from '../../services/digimons.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-digimons-buscador',
  templateUrl: './digimons-buscador.component.html',
  styleUrls: ['./digimons-buscador.component.css']
})
export class DigimonsBuscadorComponent implements OnInit {

  buscarDigimon:any;
  opcion:string;
  digimonsEncontrados:any[]=[];
  mensajeErrorCapturado:string;
  error:boolean;
  busquedaLoad:boolean;

  datos:any[] = ["Seleccione","ID","Name","Level"];
  opcionSeleccionado: string;
  verSeleccion: string;

  constructor(public digimonService:DigimonsService, public router:ActivatedRoute){ 
    this.error = false;

    this.router.params.subscribe( parametros =>{
        if(parametros['texto']){
          this.buscarDigimon = parametros['texto']; //Guardo el parametro de get del navbar a mi variable local de buscar
          this.buscarTodos(); //luego llamo al metodo
          console.log(this.datos);
        }
    });
  }
  
  ngOnInit() {
    this.capturar();
  }

  capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion con el ngModule
      this.verSeleccion = this.opcionSeleccionado;
      if(this.verSeleccion == "ID"){
        console.log("capture el id");
        return this.verSeleccion;
      }else if(this.verSeleccion == "Name"){
        console.log("capture el name");
        return this.verSeleccion;
      }else if(this.verSeleccion == "Level"){
        console.log("capture el level");
        return this.verSeleccion;
      }else{
        console.log("Seleccione");
        return this.verSeleccion;
      }
      
  }
  
  //Capturo el value del RadioButton
  /*capturarRadio(evento:any){
    this.opcion = evento.target.value;
    if(this.opcion == "id"){
      console.log("Capture el id");
    }else if(this.opcion == "name"){
      console.log("Capture el name");
    }else{
      console.log("Capture el level");
    }
    return this.opcion;
  }*/

  buscarTodos(){
    //this.buscarDigimon === "" && this.buscarDigimon.length
    if(!this.buscarDigimon || this.capturar() == "Seleccione"){//Si no escriben nada en el buscador Y no escogen mi opcion entonces le retorno vacio
      this.error = true;
      this.mensajeErrorCapturado = "Debe seleccionar un tipo y luego escribir algo !!! ";
      return;
    }else if(this.capturar() == "ID" && this.buscarDigimon.length >0){
      console.log("Estoy esperando el IDDDDDDDD !!!!!!");
      this.digimonService.getBuscarPorId(parseInt(this.buscarDigimon.toString())).subscribe((respuesta:any)=>{
        this.digimonsEncontrados = respuesta;
        this.error = false;
        console.log(this.digimonsEncontrados);
      },(error)=>{
        this.error = true;
        this.mensajeErrorCapturado = error.statusText + " No hay resultados del ID " + `${this.buscarDigimon}`;
        console.log(error, "No se encontro por el id",`${this.buscarDigimon}`);
      }); 
    }else if(this.capturar() == "Name" && this.buscarDigimon.length >0){
      console.log("Estoy esperando el NAMEEEEEE !!!!!!");
      this.digimonService.getBuscarPorNombre(this.buscarDigimon).subscribe(
        (respuesta:any) =>{
          this.digimonsEncontrados = respuesta;
          this.error = false;
          console.log(this.digimonsEncontrados);
        },
        (error:any)=>{
          this.error = true;
          this.mensajeErrorCapturado = error.statusText;
          console.log(error, "No se encontro por el Nombre",`${this.buscarDigimon}`);
        }
      );
    }else if(this.capturar() == "Level" && this.buscarDigimon.length >0){
      console.log("Estoy esperando el LEVELLLLLL !!!!!!");
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

}
