import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/dto/MensajeDTO';
import { ActualizarPacienteDTO } from '../modelo/dto/paciente/ActualizarPacienteDto';
import { CrearPQRSDTO } from '../modelo/dto/paciente/crearPqrsDto';
import { RegistroCitaDTO } from '../modelo/dto/paciente/RegistroCitaDTO';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private userUrl = "http://localhost:8080/api/pacientes";

  constructor(private http:HttpClient) { }

  public verDetallePaciente(codigo: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/detalle/${codigo}`);
  }

  public editarPerfilPaciente(pacienteDto: ActualizarPacienteDTO ): Observable<MensajeDTO>{
    return this.http.put<MensajeDTO>(`${this.userUrl}/editar-perfil`,pacienteDto);
  }

  public eliminarPaciente(codigo: string): Observable<MensajeDTO>{
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }

  public crearPQRS(registroPQRSDTO: CrearPQRSDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-PQRS`, registroPQRSDTO);
  }
  
  public listarPQRSPaciente(codigoPaciente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-PQRS/${codigoPaciente}`);
  }

  public crearCita(cita:RegistroCitaDTO): Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-cita`, cita);
  }
}
