import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { DigiAPI, ArregloDigimon } from 'src/interfaces';
import { UsuarioModels } from 'src/app/models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  public ArregloDigimon:any;
  public miUsuario:UsuarioModels;

  constructor(private http:HttpClient) {
    this.ArregloDigimon = environment.digimonURL;
    this.miUsuario = new UsuarioModels(1,"roger","qwerty","admin");
    this.miUsuario = new UsuarioModels(2,"washo","qwerty","user");
  }

  //Metodo obtener todos los digimons
  /*obtenerDigimons():Array<DigiAPI>{
    return this.digiAPI;
  }*/

  getDigimon(): Observable<ArregloDigimon>{
    return this.http
      .get<ArregloDigimon>(`${this.ArregloDigimon}?limit=5`)
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
