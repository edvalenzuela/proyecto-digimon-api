import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  //public miUsuario:UsuarioModels;

  constructor(private http:HttpClient) {
    this.ArregloDigimon = environment.digimonURL;
    this.nombres_digimones = environment.digimonNAME;
    this.id_digimones = environment.digimonID;
    this.niveles_digimones = environment.digimonLEVEL;
    /*this.miUsuario = new UsuarioModels(1,"roger","qwerty","admin");
    this.miUsuario = new UsuarioModels(2,"washo","qwerty","user");*/
  }

  //Metodo obtener todos los digimons
  /*obtenerDigimons():Array<DigiAPI>{
    return this.digiAPI;
  }*/

  getDigimon(): Observable<ArregloDigimon>{
    return this.http
      .get<ArregloDigimon>(`${this.ArregloDigimon}`)
      .pipe(catchError(this._handleError));
  }

  getBuscarPorNombre(termino:string){
    return this.http
    .get<any>(`${this.nombres_digimones}/${termino}`)
    .pipe(catchError(this._handleError));
  }

  getBuscarPorId(termino:number){
    return this.http
    .get<any>(`${this.id_digimones}/${termino}`)
    .pipe(catchError(this._handleError));
  }

  getBuscarPorNivel(termino:string){
    return this.http
    .get<any>(`${this.niveles_digimones}/${termino}`)
    .pipe(catchError(this._handleError));
  }

  private _handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("Error detectado =>", error.error.message);
    }else{
      console.error(`Código del error => " ${error.status}, ` + `El contenido tiene => ${error.error}`);
    }

    return throwError('Error!');
  }
}
