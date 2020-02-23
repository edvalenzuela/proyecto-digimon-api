import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DigimonsService } from './services/digimons.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DigimonsHomeComponent } from './components/digimons-home/digimons-home.component';
import { DigimonIdComponent } from './components/digimons-buscador/digimon-id/digimon-id.component';
import { DigimonNombreComponent } from './components/digimons-buscador/digimon-nombre/digimon-nombre.component';
import { DigimonNivelComponent } from './components/digimons-buscador/digimon-nivel/digimon-nivel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DigimonsHomeComponent,
    DigimonIdComponent,
    DigimonNombreComponent,
    DigimonNivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DigimonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
