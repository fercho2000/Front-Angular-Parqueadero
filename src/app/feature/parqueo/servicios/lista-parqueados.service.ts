import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaParqueadosService {
private URLOBTENE: string="http://localhost:8080/obtenervehiculos";
  constructor(private http: HttpClient) { }

  listarVehiculosParqueados(): any{
   return this.http.get(this.URLOBTENE);
  }
}
