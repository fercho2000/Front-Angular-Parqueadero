import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListaSalidasService {

  private URLSALIDA : string= environment.urlputretirovehiculo;
  constructor(private http: HttpClient) { }

  // Observable string sources
  private listaCambioSource = new Subject<string>();

  // Observable string streams
  listaCambio$ = this.listaCambioSource.asObservable();

  retitrarVehiculo(placa: string):any{
    // return this.http.post(this.URLGUARDAR,JSON.parse(placa));
    return this.http.put(`${this.URLSALIDA}${placa}`,null).pipe(
      tap(_ => this.listaCambioSource.next())
    );
  }

}
