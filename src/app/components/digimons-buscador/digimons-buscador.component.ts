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

  buscarDigimon:string = ""; //Lo declaro vacio debido a que me lo detecta undefined al buscar, porque no he escrito nada
  opcion:string;
  digimonsEncontrados:any[]=[]; //Guardo mis digimons encontrados y luego los recorro en el html
  mensajeErrorCapturado:string; //Capturo el error y lo imprimo en mi html
  error:boolean; //Flag donde capturo el error

  datos:any[] = ["ID","Name","Level"]; //Datos del select
  opcionSeleccionado: string = "Seleccione"; //Opcion que adquiero del html al seleccionar
  verSeleccion: string = "";

  constructor(public digimonService:DigimonsService, public router:ActivatedRoute){ 
    this.error = false;
    
    //Acá redireccionaba a este pagina por medio de un input buscar en el navbar que aparecia en el inicio
    this.router.params.subscribe( parametros =>{
        if(parametros['texto']){
          this.buscarDigimon = parametros['texto']; //Guardo el parametro de get del navbar a mi variable local de buscar
          this.buscarTodos(); //luego llamo al metodo
          console.log(this.datos);
        }
    });
  }
  
  ngOnInit() {
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
    console.log("Parametro buscar => ", this.buscarDigimon);
    console.log("Parametro buscar.length => ", this.buscarDigimon.length);
    console.log("Metodo capturar =>", typeof this.capturar());
    //Pregunto si no viene elegida la opción o no viene el texto del buscador, tienen que venir ambas para que pase true
    if(!this.capturar() || this.buscarDigimon.trim().length == 0){
      console.log("Entre al primer if");
      this.error = true;
      this.mensajeErrorCapturado = "Asegurese de seleccionar y escribir!!!";
      return;
    }/*else if(this.capturar() == null && this.buscarDigimon.trim().length >=1){
      console.log("Entre al segundo if");
      this.error = true;
      this.mensajeErrorCapturado = "Asegurese de seleccionar!!!";
      return;
    }*/
    else if(this.capturar() == "ID" && this.buscarDigimon.trim().length > 0){
      console.log("Estoy esperando el IDDDDDDDD !!!!!!");
      this.digimonService.getBuscarPorId(parseInt(this.buscarDigimon)).subscribe((respuesta:any)=>{
        this.digimonsEncontrados = respuesta;
        this.error = false;
        console.log(this.digimonsEncontrados);
      },(error)=>{
        this.error = true;
        this.mensajeErrorCapturado = error.statusText;
        console.log(error, "No se encontro por el id",`${this.buscarDigimon}`);
      }); 
    }else if(this.capturar() == "Name" && this.buscarDigimon.trim().length > 0){
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
    }else if(this.capturar() == "Level" && this.buscarDigimon.trim().length > 0){
      console.log("Estoy esperando el LEVELLLLLL !!!!!!");
      this.digimonService.getBuscarPorNivel(this.buscarDigimon).subscribe(
        (respuesta:any) =>{
          this.digimonsEncontrados = respuesta;
          console.log(this.digimonsEncontrados);
          console.log("cantidad de niveles =>", this.digimonsEncontrados.length);
        },
        (error:any)=>{
          this.error = true;
          this.mensajeErrorCapturado = error.statusText;
          console.log(error, "No se encontro por el Nivel",`${this.buscarDigimon}`);//Capturo el id ingresado
        }
      );
    }else{
      console.log("Entre al ultimo else");
      this.error = true;
      this.mensajeErrorCapturado = "Asegurese de seleccionar!!!";
      return;
    }
}

}
