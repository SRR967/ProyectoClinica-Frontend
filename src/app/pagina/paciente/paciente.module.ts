import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CrearPQRSComponent } from './crear-pqrs/crear-pqrs.component';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';
import { ListarPQRSComponent } from './listar-pqrs/listar-pqrs.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { ListarConsultasComponent } from './listar-consultas/listar-consultas.component';
import { DetalleConsultaComponent } from './detalle-consulta/detalle-consulta.component';
import { ResponderPQRSComponent } from './responder-pqrs/responder-pqrs.component';



@NgModule({
  declarations: [
    DetalleComponent,
    EditarPerfilComponent,
    CrearPQRSComponent,
    DetalleCitaComponent,
    ListarPQRSComponent,
    ListarCitasComponent,
    ListarConsultasComponent,
    DetalleConsultaComponent,
    ResponderPQRSComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PacienteModule { }
