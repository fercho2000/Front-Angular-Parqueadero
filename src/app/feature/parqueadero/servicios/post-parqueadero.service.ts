import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostParqueaderoService {
  private URLGUARDAR : string= environment.urlpostvehiculos;

  // Observable string sources
  private listaCambioSource = new Subject<string>();

  // Observable string streams
  listaCambio$ = this.listaCambioSource.asObservable();

  constructor(private http : HttpClient) { }
 
  registrarParqueo(body: string):any{
    // return this.http.post(this.URLGUARDAR,JSON.parse(body));
    return this.http.post(this.URLGUARDAR,JSON.parse(body)).pipe(
      tap(_ => this.listaCambioSource.next())
    );
  }
}
