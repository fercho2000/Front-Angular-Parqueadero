import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponenteBienvenidaComponent} from './feature/parqueo/componente-bienvenida/componente-bienvenida.component';
import {ComponentePaginaParqueaderoComponent} from './feature/parqueo/componente-pagina-parqueadero/componente-pagina-parqueadero.component';
const routes: Routes = [
  {path : "inicio" , component :ComponenteBienvenidaComponent },
  {path : "" , redirectTo: "inicio", pathMatch: "full"},
  {path : "vehiculos" , component : ComponentePaginaParqueaderoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
