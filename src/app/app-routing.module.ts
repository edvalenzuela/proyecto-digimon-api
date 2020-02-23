import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importo a todos mis componentes
import { DigimonsHomeComponent } from './components/digimons-home/digimons-home.component';
import { DigimonIdComponent } from './components/digimons-buscador/digimon-id/digimon-id.component';
import { DigimonNombreComponent } from './components/digimons-buscador/digimon-nombre/digimon-nombre.component';
import { DigimonNivelComponent } from './components/digimons-buscador/digimon-nivel/digimon-nivel.component';

const routes: Routes = [
  { path: 'home', component:  DigimonsHomeComponent},
  { path: 'digimonsId', component:  DigimonIdComponent},
  { path: 'digimonsNombre', component:  DigimonNombreComponent},
  { path: 'digimonsNivel', component:  DigimonNivelComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
