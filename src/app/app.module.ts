import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './shared';
import {ComponenteBienvenidaComponent} from './feature/parqueo/componente-bienvenida/componente-bienvenida.component';
import {ComponentePaginaParqueaderoComponent} from './feature/parqueo/componente-pagina-parqueadero/componente-pagina-parqueadero.component';
import {ComponenteListaParqueadosComponent} from './feature/parqueo/componente-lista-parqueados/componente-lista-parqueados.component';
import {FormularioRegistroParqueoComponent} from './feature/parqueo/formulario-registro-parqueo/formulario-registro-parqueo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    ComponenteBienvenidaComponent,
    ComponentePaginaParqueaderoComponent,
    ComponenteListaParqueadosComponent,
    FormularioRegistroParqueoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
