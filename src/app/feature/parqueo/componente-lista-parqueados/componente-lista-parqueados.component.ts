import { Component, OnInit } from '@angular/core';
import {ListaParqueadosService} from '../servicios/lista-parqueados.service';
@Component({
  selector: 'app-componente-lista-parqueados',
  templateUrl: './componente-lista-parqueados.component.html',
  styleUrls: ['./componente-lista-parqueados.component.css']
})
export class ComponenteListaParqueadosComponent implements OnInit {

  constructor(private servicioGet : ListaParqueadosService) { }
  public listaParqueados:any = [];
  ngOnInit() {
    this.listarVehiculosParqueados();
  }

  listarVehiculosParqueados(){
    this.servicioGet.listarVehiculosParqueados().subscribe((response) => {
      
      response.forEach(element => {
        this.listaParqueados.push(element);
        
      });
     
      // response.forEach((item) => {
      //   console.log(item);
      // })
    });
  }
}
