import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNoExisteComponent } from './shared/pagina-no-existe/pagina-no-existe.component';

const routes: Routes = [
  {path: "**", component: PaginaNoExisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
