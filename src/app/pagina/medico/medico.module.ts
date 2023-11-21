import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasPendientesComponent } from './citas-pendientes/citas-pendientes.component';
import { ListarCitasMedicoComponent } from './listar-citas/listar-citas.component';
import { DetalleCitaMedicoComponent } from './detalle-cita/detalle-cita.component';
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
import { AlertaMedicoComponent } from './alerta-medico/alerta-medico.component';


const routes: Routes= [
  {path: '', component: MedicoInicioComponent},
];

@NgModule({
  declarations: [
    CitasPendientesComponent,
    ListarCitasMedicoComponent,
    DetalleCitaMedicoComponent,
    RadicarConsultaComponent,
    CitasAtendidasComponent,
    RegistrarDiaLibreComponent,
    VerDiasLibresComponent,
    MedicoInicioBodyComponent,
    MedicoInicioComponent,
    AlertaMedicoComponent
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
