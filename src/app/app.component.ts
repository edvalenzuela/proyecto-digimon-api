import { Component } from '@angular/core';
import { DigiAPI } from './../interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public digimons:Array<DigiAPI>;

  exportDigimons(digimons:Array<DigiAPI>):void{
    if(this.digimons !== digimons){
      this.digimons = digimons;
    }
  }
}
