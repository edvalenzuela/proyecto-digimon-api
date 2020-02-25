import { Component,EventEmitter,Input, Output, OnInit } from '@angular/core';
import { ArregloDigimon } from 'src/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  buscar:string;
  listaDigimones:Array<ArregloDigimon>;

  constructor() { }

  ngOnInit() {
  }

  searchEvent(buscar): void {
    // verifica si la busqueda esta limpia
    if (buscar === '') {
      this.buscar = buscar;
    }
    this.searchChange.emit(this.buscar);
  }

  @Input() set digimons(digimons: ArregloDigimon[]) {
    if (digimons !== this.listaDigimones) {
      this.listaDigimones = digimons;
    }
  }

}
