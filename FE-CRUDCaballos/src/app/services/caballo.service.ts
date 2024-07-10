import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caballo } from '../interfaces/caballo';

@Injectable({
  providedIn: 'root'
})
export class CaballoService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Caballo/'

  constructor(private http: HttpClient) { }

  getCaballos(): Observable<Caballo[]>{
    return this.http.get<Caballo[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }


  getCaballo(id: number): Observable<Caballo>{
    return this.http.get<Caballo>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteCaballo(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addCaballo(caballo: Caballo): Observable<Caballo> {
    return this.http.post<Caballo>(`${this.myAppUrl}${this.myApiUrl}`, caballo);
  }

  updateCaballo(id: number, caballo: Caballo): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, caballo);
  }


}
