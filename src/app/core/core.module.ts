import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* our own custom services  */
// import { SomeSingletonService } from './some-singleton/some-singleton.service';

@NgModule({
  imports: [
    /* 3rd party libraries */
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    /* our own custom services  */
    // SomeSingletonService
    HttpClientModule
  ]
})
export class CoreModule { }
