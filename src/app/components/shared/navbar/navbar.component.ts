import { Component,EventEmitter,Input, Output, OnInit } from '@angular/core';
import { ArregloDigimon } from 'src/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  buscar:string;
  listaDigimones:Array<ArregloDigimon>;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscasDigimonNavbar(texto): void {
    // verifica si la busqueda esta limpia
    if (texto.length == 0) {
      return;
    }
    this.router.navigate(['buscador', texto]);
  }

}
