import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MensajeDTO} from '../modelo/dto/MensajeDTO';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private clinicaURL = "http://localhost:8080/api/clinica";

  constructor(private http:HttpClient) { }

  public listarCiudades(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-ciudades`);
  }

  public listarTipoSangre(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-tipo-sangre`);
  }

  public listarEspecialidades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-especialidades`);
  }

  public listarEPS(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-EPS`);
  }

  public listarMedico(especialidad:string): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-medicos/${especialidad}`);
  }

  public listarTipoPQRS(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/listar-tipoPQRS`);
  }

}
