import { NgModule } from '@angular/core';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContrasenaComponent } from './pagina/recuperar-contrasena/recuperar-contrasena.component';
import { PacienteInicioComponent } from './pagina/paciente/paciente-inicio/paciente-inicio.component';
import { CrearPQRSComponent } from './pagina/paciente/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/paciente/detalle-pqrs/detalle-pqrs.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { ListarPQRSComponent } from './pagina/paciente/listar-pqrs/listar-pqrs.component';
import { ListarCitasComponent } from './pagina/paciente/listar-citas/listar-citas.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: "login", component: LoginComponent, canActivate:[LoginGuard]},
  {path: "registro", component: RegistroComponent, canActivate:[LoginGuard]},
  {path: "recuperarContrasena", component: RecuperarContrasenaComponent},
  {path: "pacienteInicio", loadChildren: () => import( './pagina/paciente/paciente.module' ).then( (m) => m.PacienteModule),
    canActivateChild: [RolesGuard], data:{expectedRole:["paciente"]}},
  {path: "medicoInicio", loadChildren:()=> import('./pagina/medico/medico.module').then( (m) => m.MedicoModule),
    canActivateChild: [RolesGuard], data:{expectedRole:["medico"]}},
  {path: "crearPqrs", component: CrearPQRSComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["paciente"]
  }},
  {path: "detallePqrs/:codigo", component: DetallePqrsComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["paciente"]
  } },
  {path: "listarPqrs", component: ListarPQRSComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["paciente"]
  } },
  {path: "listarCitas", component: ListarCitasComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["paciente"]
  } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
