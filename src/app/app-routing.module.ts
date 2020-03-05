import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importo a todos mis componentes
import { DigimonsHomeComponent } from './components/digimons-home/digimons-home.component';
import { DigimonsBuscadorComponent } from './components/digimons-buscador/digimons-buscador.component';


const routes: Routes = [
  { path: 'home', component:  DigimonsHomeComponent},
  { path: 'buscador', component:  DigimonsBuscadorComponent},
  { path: 'buscador/:texto', component:  DigimonsBuscadorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
