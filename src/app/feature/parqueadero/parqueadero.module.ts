import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { RegistroParqueoComponent } from './registro-parqueo/registro-parqueo.component';
import { ParqueaderoComponent } from './parqueadero.component';
import { ListaParqueoComponent } from './lista-parqueo/lista-parqueo.component';


@NgModule({
  declarations: [RegistroParqueoComponent, ParqueaderoComponent, ListaParqueoComponent],
  imports: [
    CommonModule,
    ParqueaderoRoutingModule
  ]
})
export class ParqueaderoModule { }
