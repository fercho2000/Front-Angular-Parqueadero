import { Component, OnInit } from '@angular/core';
import {ListaParqueadosService} from '../servicios/lista-parqueados.service';
import {PostParqueaderoService} from '../servicios/post-parqueadero.service';
import {ListaSalidasService} from '../servicios/lista-salidas.service';

import { Subscription }   from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-parqueo',
  templateUrl: './lista-parqueo.component.html',
  styleUrls: ['./lista-parqueo.component.css']
})
export class ListaParqueoComponent implements OnInit {

  subscription: Subscription;
  // const Swal = require('sweetalert2');
  constructor(private servicioGet : ListaParqueadosService, private servicioPost: PostParqueaderoService,
    private servicioPut: ListaSalidasService) { 

    this.subscription = servicioPost.listaCambio$.subscribe(
      () => {
        this.listarVehiculosParqueados();
    });

    this.subscription = servicioPut.listaCambio$.subscribe(
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

  
    salidaVehiculo(placavehi: string){
      this.servicioPut.retitrarVehiculo(placavehi).subscribe((response) => {
        console.log(response);
        if(response.fechaSalida!=null){
          Swal.fire(
            'Bien hecho!',
            'Se retiro el vehiculo con placa: ' + response.placa+' El valor a pagar es :  '+response.pago,
            'success'
          )
          // alert("Salida éxitosa para el vehiculo con la placa : " +response.placa);
        }else{
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ocurrio Un error!',
            
          });
        }
    if (response.ERROR) {
      console.log("paso"+response.ERROR);
    }
        // response.forEach((item) => {
        //   console.log(item);
        // })
      }, error => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: error.error.mensaje,
          
        });
        // console.log('error = ..', error.error.mensaje, error);
      });

    }

}
