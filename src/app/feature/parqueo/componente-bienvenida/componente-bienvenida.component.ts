import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-componente-bienvenida',
  templateUrl: './componente-bienvenida.component.html',
  styleUrls: ['./componente-bienvenida.component.css']
})
export class ComponenteBienvenidaComponent implements OnInit {

  constructor(private router : Router ) { }

  ngOnInit() {
  }

  redireccionar(){
    this.router.navigate(['vehiculos']);
  }

}
