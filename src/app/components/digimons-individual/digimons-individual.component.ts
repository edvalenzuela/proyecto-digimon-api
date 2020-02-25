import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-digimons-individual',
  templateUrl: './digimons-individual.component.html',
  styleUrls: ['./digimons-individual.component.css']
})
export class DigimonsIndividualComponent implements OnInit {

  @Input() digimon_individual:any = {} //Llamo el evento input (hijo de padre) para usarlo en el componente principal
  @Input() index: number; //Capturo el index del for

  constructor() { }

  ngOnInit() {
  }

}
