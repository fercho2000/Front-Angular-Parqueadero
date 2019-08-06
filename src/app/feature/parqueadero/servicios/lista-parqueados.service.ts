import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaParqueadosService {
  
  private URLOBTENE: string= environment.urlgetvehiculos;
  constructor(private http: HttpClient) { }

  listarVehiculosParqueados(): any{
   return this.http.get(this.URLOBTENE);
  }
}
