import { NgModule } from '@angular/core';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContrasenaComponent } from './pagina/recuperar-contrasena/recuperar-contrasena.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { PacienteInicioComponent } from './pagina/paciente/paciente-inicio/paciente-inicio.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "recuperarContrasena", component: RecuperarContrasenaComponent},
  {path: "pacienteInicio", component: PacienteInicioComponent},
  {path: "gestionPqrs", component:GestionPqrsComponent},
  {path: "*", pathMatch: "full", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
