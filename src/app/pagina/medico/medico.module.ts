import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasPendientesComponent } from './citas-pendientes/citas-pendientes.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';
import { RadicarConsultaComponent } from './radicar-consulta/radicar-consulta.component';
import { CitasAtendidasComponent } from './citas-atendidas/citas-atendidas.component';
import { RegistrarDiaLibreComponent } from './registrar-dia-libre/registrar-dia-libre.component';
import { VerDiasLibresComponent } from './ver-dias-libres/ver-dias-libres.component';
import { MedicoInicioBodyComponent } from './medico-inicio-body/medico-inicio-body.component';
import { MedicoInicioComponent } from './medico-inicio/medico-inicio.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioInterceptor } from 'src/app/interceptor/usuario.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes= [
  {path: '', component: MedicoInicioComponent},
];

@NgModule({
  declarations: [
    CitasPendientesComponent,
    ListarCitasComponent,
    DetalleCitaComponent,
    RadicarConsultaComponent,
    CitasAtendidasComponent,
    RegistrarDiaLibreComponent,
    VerDiasLibresComponent,
    MedicoInicioBodyComponent,
    MedicoInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true}
  ],
  exports: [RouterModule]
})
export class MedicoModule { }
