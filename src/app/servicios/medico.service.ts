import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaLibreDTO } from '../modelo/dto/medico/DiaLibreDto';
import { MensajeDTO } from '../modelo/dto/MensajeDTO';
import { AtenderCitaDTO } from '../modelo/dto/AtenderCitaDTO';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  URL= 'http://localhost:8080/api/medicos'
  constructor(private http: HttpClient) { }


  public verCitasPendientes(cedula: string): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.URL}/citas-pendientes/${cedula}`);
  }
  public verDetalleCita(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.URL}/detalle-cita/${codigo}`);
  }

  public radicarConsulta(cita:AtenderCitaDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.URL}/radicar-consulta`,cita);
  }

  public listarCitas(cedula: string): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.URL}/listar-citas/${cedula}`);
  }

  public listarCitasAtendidas(cedula:string): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.URL}/citas-atendidas/${cedula}`);
  }

  public getVerDiasLibres(cedula: string): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.URL}/getVerDiasLibres/${cedula}`);
  }

  public registrarDiaLibre(diaLibre: DiaLibreDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.URL}/asignarDiaLibre`, diaLibre);
  }
}
