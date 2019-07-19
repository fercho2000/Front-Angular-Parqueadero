import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostParqueaderoService {
private URLGUARDAR : string="http://localhost:8080/registrarHistorial";

  constructor(private http : HttpClient) { }
 
  registrarParqueo(body: string):any{
    return this.http.post(this.URLGUARDAR,JSON.parse(body));
  }
}
