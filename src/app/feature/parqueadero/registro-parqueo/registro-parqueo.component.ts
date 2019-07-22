import { Component, OnInit } from '@angular/core';
import { PostParqueaderoService } from '../servicios/post-parqueadero.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro-parqueo',
  templateUrl: './registro-parqueo.component.html',
  styleUrls: ['./registro-parqueo.component.css']
})
export class RegistroParqueoComponent implements OnInit {

  public placa: string = "";
  public tipovehiculo: string = 'seleccion';
  public cilindraje: string = "";
  public marca: string = "";
  public modelo: string = "";

  constructor(private servicioPost: PostParqueaderoService) { }

  ngOnInit() {
  }

  registrarParqueo() {
   
    // this.placa = '';
    // console.log("en placa " + this.placa + " en tipoVehiculo " + this.tipovehiculo + " en cilindraje "
    //   + this.cilindraje + " en marca " + this.marca + " en modelo " + this.modelo);

    if (this.tipovehiculo == "" || this.tipovehiculo == "seleccion") {
      this.tipovehiculo= 'seleccion';

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debes seleccionar el tipo de vehiculo!',

      });


      return false;

    } else if (this.placa.trim().length == 0) {

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debes ingresar la placa!',

      });

      return false;

    } else if (this.cilindraje.trim().length == 0) {

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debes ingresar el cilindraje!',

      });

      return false;

    } else if (this.marca.trim().length == 0) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debes ingresar la marca!',

      });

      return false;

    } else if (this.modelo.trim().length == 0) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debes ingresarel modelo!',

      });

      return false;
    }

    let body = {
      "placa": this.placa,
      "tipoVehiculo": this.tipovehiculo,
      "cilindraje": this.cilindraje,
      "marca": this.marca,
      "modelo": this.modelo,
    }

    this.servicioPost.registrarParqueo(JSON.stringify(body)).subscribe((response) => {
      console.log("esta es la respuesta " + response);
      if (response == null) {

        Swal.fire(
          'Bien hecho!',
          'Registro éxitoso',
          'success'
        )
      }

    }, error => {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: error.error.mensaje,

      });
      this.tipovehiculo= 'seleccion';
    });

    this.placa = '';
    this.tipovehiculo = '';
    this.cilindraje = '';
    this.marca = '';
    this.modelo = '';
  }
}
