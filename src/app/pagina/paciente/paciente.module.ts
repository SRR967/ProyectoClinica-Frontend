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
import { PacienteInicioComponent } from './paciente-inicio/paciente-inicio.component';
import { PacienteInicioBodyComponent } from './paciente-inicio-body/paciente-inicio-body.component';
import { RouterModule, Routes } from '@angular/router';
import { DetallePqrsComponent } from './detalle-pqrs/detalle-pqrs.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { FormsModule } from '@angular/forms';
import { AlertaPacienteComponent } from './alerta-paciente/alerta-paciente.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioInterceptor } from 'src/app/interceptor/usuario.interceptor';
import { ImagenesComponent } from '../imagenes/imagenes.component';


const routes: Routes = [
  {path: '',  component: PacienteInicioComponent },
];

@NgModule({
  declarations: [
    DetalleComponent,
    EditarPerfilComponent,
    DetalleCitaComponent,
    ListarPQRSComponent,
    ListarCitasComponent,
    ListarConsultasComponent,
    DetalleConsultaComponent,
    ResponderPQRSComponent,
    PacienteInicioBodyComponent,
    PacienteInicioComponent,
    DetallePqrsComponent,
    CrearCitaComponent,
    AlertaPacienteComponent,
    ImagenesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true}
  ],
  exports: [ RouterModule ]
})
export class PacienteModule { }
