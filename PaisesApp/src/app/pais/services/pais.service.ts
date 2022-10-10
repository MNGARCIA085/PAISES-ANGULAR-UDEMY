import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';
 
@Injectable({
  providedIn: 'root'
})
export class PaisService {
 
  private apiUrl: string = "https://restcountries.com/v3.1";
 
  // inyecto el servicio
  constructor( private http: HttpClient ) { }
 
  // se que voy a devolver un arreglo de paises, pero como todavia no se bien como es
  // de momento retorno any
  buscarPais( termino: string): Observable<Country[]> { 
    const url = `${ this.apiUrl }/name/${termino}`;
    // no uso .subscribe() porque no quiero retornar la info. dentro del servicio
    // sino a quien quiera que mando a llamar a buscarPais
    return this.http.get<Country[]>(url);
  }


  buscarCapital( termino: string): Observable<Country[]> { 
    const url = `${ this.apiUrl }/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }


 
}
