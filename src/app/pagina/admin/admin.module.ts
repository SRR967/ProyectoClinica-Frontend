import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearMedicoComponent } from './crear-medico/crear-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { DetalleMedicoComponent } from './detalle-medico/detalle-medico.component';
import { ListarPqrsComponent } from './listar-pqrs/listar-pqrs.component';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { ResponderComponent } from './responder/responder.component';
import { CambiarEstadoComponent } from './cambiar-estado/cambiar-estado.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    CrearMedicoComponent,
    EditarMedicoComponent,
    ListarMedicosComponent,
    DetalleMedicoComponent,
    ListarPqrsComponent,
    RespuestasComponent,
    ResponderComponent,
    CambiarEstadoComponent,
    ListarCitasComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
