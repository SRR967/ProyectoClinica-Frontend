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

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: "login", component: LoginComponent, canActivate:[LoginGuard]},
  {path: "registro", component: RegistroComponent, canActivate:[LoginGuard]},
  {path: "recuperarContrasena", component: RecuperarContrasenaComponent},
  {path: "pacienteInicio", loadChildren: () => import( './pagina/paciente/paciente.module' ).then( (m) => m.PacienteModule)  },
  {path: "crearPqrs", component: CrearPQRSComponent},
  {path: "detallePqrs/:codigo", component: DetallePqrsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
