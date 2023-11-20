import { Injectable } from '@angular/core';
import { RegistroCitaDTO } from '../modelo/dto/paciente/RegistroCitaDTO';
import CitaPacienteDTO from '../modelo/dto/paciente/CitaPacienteDto';
import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../modelo/dto/MensajeDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private userUrl = "http://localhost:8080/api/pacientes";

  cita: CitaPacienteDTO[];

  constructor(private http:HttpClient) {
    this.cita=[];
  }

  public listar(): CitaPacienteDTO[]{
    return this.cita;
  }

  public obtener(codigo: number): CitaPacienteDTO | undefined{
    return this.cita.find(cita => cita.codigo == codigo);
  }

  public crear(cita:RegistroCitaDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-cita`, cita);
  }
}
