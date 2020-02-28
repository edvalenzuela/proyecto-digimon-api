import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Peticiones HTTP
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; //Formularios
import { AppRoutingModule } from './app-routing.module';
import { DigimonsService } from './services/digimons.service'; //Mis Servicios

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DigimonsHomeComponent } from './components/digimons-home/digimons-home.component';
import { DigimonsBuscadorComponent } from './components/digimons-buscador/digimons-buscador.component';
import { DigimonsIndividualComponent } from './components/digimons-individual/digimons-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DigimonsHomeComponent,
    DigimonsBuscadorComponent,
    DigimonsIndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DigimonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
