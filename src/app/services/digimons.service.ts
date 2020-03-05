import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { DigiAPI, ArregloDigimon } from 'src/interfaces';
//import { UsuarioModels } from 'src/app/models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  public ArregloDigimon:any;
  public nombres_digimones:any;
  public id_digimones:any;
  public niveles_digimones:any;

  constructor(private http:HttpClient) {
    this.ArregloDigimon = environment.digimonURL;
    this.nombres_digimones = environment.digimonNAME;
    this.id_digimones = environment.digimonID;
    this.niveles_digimones = environment.digimonLEVEL;
  }

  //Metodo obtener todos los digimons
  /*obtenerDigimons():Array<DigiAPI>{
    return this.digiAPI;
  }*/

  getDigimon(): Observable<ArregloDigimon>{
    return this.http.get<ArregloDigimon>(`${this.ArregloDigimon}`);
  }

  getBuscarPorNombre(termino:string){
    return this.http.get<any>(`${this.nombres_digimones}/${termino}`);
  }

  getBuscarPorId(termino:number){
    return this.http.get<any>(`${this.id_digimones}/${termino}`);
  }

  getBuscarPorNivel(termino:string){
    return this.http.get<any>(`${this.niveles_digimones}/${termino}`);
  }
}
