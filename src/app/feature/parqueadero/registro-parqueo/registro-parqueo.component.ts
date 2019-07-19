import { Component, OnInit } from '@angular/core';
import {PostParqueaderoService} from '../servicios/post-parqueadero.service';

@Component({
  selector: 'app-registro-parqueo',
  templateUrl: './registro-parqueo.component.html',
  styleUrls: ['./registro-parqueo.component.css']
})
export class RegistroParqueoComponent implements OnInit {

  public placa : string="";
  public tipovehiculo : string='Selecciona el vehiculo';
  public cilindraje : string="";
  public marca : string="";
  public modelo : string="";

  constructor(private servicioPost : PostParqueaderoService) { }

  ngOnInit() {
  }

  registrarParqueo(){

    this.placa = '';
    // console.log(this.placa);
    let body = 	{
      "placa" :this.placa,
      "tipoVehiculo" :this.tipovehiculo,
      "cilindraje" :this.cilindraje,
      "marca" : this.marca,
      "modelo" : this.modelo,
    }

    this.servicioPost.registrarParqueo(JSON.stringify(body)).subscribe((response) => {
      console.log(response);
      // response.forEach((item) => {
      //   console.log(item);
      // })
    });
    
  this.placa='';
  this.tipovehiculo='';
  this.cilindraje='';
  this.marca='';
  this.modelo='';
  }
}
