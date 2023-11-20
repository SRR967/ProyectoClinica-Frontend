import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaLibreDTO } from '../modelo/dto/medico/DiaLibreDto';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  URL= 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }


  public getCitasAtendidas(cedula: string): Observable<any>{
    return this.http.get(`${this.URL}/getCitasAtendidas/${cedula}`);
  }
  public getCitasPendientes(cedula: string): Observable<any>{
    return this.http.get(`${this.URL}/getCitasPendientes/${cedula}`);
  }
  public getDetalleCita(cedula: string): Observable<any>{
    return this.http.get(`${this.URL}/getDetalleCita/${cedula}`);
  }
  public getListarCitas(cedula: string): Observable<any>{
    return this.http.get(`${this.URL}/getListarCitas/${cedula}`);
  }
  public getVerDiasLibres(cedula: string): Observable<any>{
    return this.http.get(`${this.URL}/getVerDiasLibres/${cedula}`);
  }

  registrarDiaLibre(diaLibre: DiaLibreDTO): Observable<any> {
    let params = JSON.stringify(diaLibre);
    return this.http.post(`${this.URL}/registrarDiaLibre/`, params);
  }
}
