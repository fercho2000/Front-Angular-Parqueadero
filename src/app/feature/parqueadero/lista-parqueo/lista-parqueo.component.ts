import { Component, OnInit } from '@angular/core';
import {ListaParqueadosService} from '../servicios/lista-parqueados.service';
import {PostParqueaderoService} from '../servicios/post-parqueadero.service';


import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-lista-parqueo',
  templateUrl: './lista-parqueo.component.html',
  styleUrls: ['./lista-parqueo.component.css']
})
export class ListaParqueoComponent implements OnInit {

  subscription: Subscription;

  constructor(private servicioGet : ListaParqueadosService, private servicioPost: PostParqueaderoService) { 
    this.subscription = servicioPost.listaCambio$.subscribe(
      () => {
        this.listarVehiculosParqueados();
    });
  }
  public listaParqueados:any = [];
  ngOnInit() {
    this.listarVehiculosParqueados();
  }

  listarVehiculosParqueados(){
    this.servicioGet.listarVehiculosParqueados().subscribe((vehiculosEnParqueo) => {
      this.listaParqueados = vehiculosEnParqueo;  
      // response.forEach((item) => {
      //   console.log(item);
      // })
    });
  }

}
