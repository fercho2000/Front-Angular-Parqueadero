import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './shared';

// app modules
import { CoreModule } from './core';
import { BienvenidaModule } from './feature';
import { ParqueaderoModule } from './feature';
import { PaginaNoExisteComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    PaginaNoExisteComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BienvenidaModule,
    ParqueaderoModule,
    AppRoutingModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
