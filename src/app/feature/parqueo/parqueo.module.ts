import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRegistroParqueoComponent } from './formulario-registro-parqueo/formulario-registro-parqueo.component';
import { ComponenteBienvenidaComponent } from './componente-bienvenida/componente-bienvenida.component';
import { ComponenteListaParqueadosComponent } from './componente-lista-parqueados/componente-lista-parqueados.component';
import { ComponentePaginaParqueaderoComponent } from './componente-pagina-parqueadero/componente-pagina-parqueadero.component';
import { FormsModule } from '@angular/forms';



@NgModule({

  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [FormularioRegistroParqueoComponent, ComponenteBienvenidaComponent, ComponenteListaParqueadosComponent, ComponentePaginaParqueaderoComponent]
})
export class ParqueoModule { }
