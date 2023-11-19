import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { Superhero } from '../interfaces/superheros.interface';



@Injectable({
  providedIn: 'root'
})
export class SuperherosService {
  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getHeroe(): Observable<Superhero[]>{
    return this.http.get<Superhero[]>( `${ this.baseUrl }/superheros`);
  }

  getHeroePorId( id: string): Observable<Superhero>{
    return this.http.get<Superhero>(`${ this.baseUrl }/superhero/${id}`);
  }

  getSugerencias(termino: string): Observable<Superhero[]>{
    return this.http.get<Superhero[]>(`${ this.baseUrl }/superheros/?q=${termino}&_limit=6`);
  }

  agregarHeroe(superhero: Superhero): Observable<Superhero>{
    return this.http.post<Superhero>(`${ this.baseUrl }/superhero`, superhero)
  }

  actualizarHeroe(superhero: Superhero): Observable<Superhero>{
    return this.http.put<Superhero>(`${ this.baseUrl }/superhero/${superhero.id}`, superhero)
  }

  eliminarHeroe(id: string): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/superhero/${id}`);
  }
}
