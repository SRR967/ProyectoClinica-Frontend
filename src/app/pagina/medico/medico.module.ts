import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasPendientesComponent } from './citas-pendientes/citas-pendientes.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';
import { RadicarConsultaComponent } from './radicar-consulta/radicar-consulta.component';
import { CitasAtendidasComponent } from './citas-atendidas/citas-atendidas.component';
import { RegistrarDiaLibreComponent } from './registrar-dia-libre/registrar-dia-libre.component';
import { VerDiasLibresComponent } from './ver-dias-libres/ver-dias-libres.component';



@NgModule({
  declarations: [
    CitasPendientesComponent,
    ListarCitasComponent,
    DetalleCitaComponent,
    RadicarConsultaComponent,
    CitasAtendidasComponent,
    RegistrarDiaLibreComponent,
    VerDiasLibresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicoModule { }
