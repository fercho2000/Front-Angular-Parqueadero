import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-salidas',
  templateUrl: './lista-salidas.component.html',
  styleUrls: ['./lista-salidas.component.css']
})
export class ListaSalidasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salidaVehiculo(placavehi: string){

    console.log("el valor de la placa es: "+placavehi);
  }

}
