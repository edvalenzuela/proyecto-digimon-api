import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DigimonsService } from './services/digimons.service';

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
    HttpClientModule
  ],
  providers: [
    DigimonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
