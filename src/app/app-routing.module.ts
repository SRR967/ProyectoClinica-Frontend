import { NgModule } from '@angular/core';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContrasenaComponent } from './pagina/recuperar-contrasena/recuperar-contrasena.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { PacienteInicioComponent } from './pagina/paciente/paciente-inicio/paciente-inicio.component';
import { CrearPQRSComponent } from './pagina/paciente/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/paciente/detalle-pqrs/detalle-pqrs.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "recuperarContrasena", component: RecuperarContrasenaComponent},
  {path: "pacienteInicio", loadChildren: () => import( './pagina/paciente/paciente.module' ).then( (m) => m.PacienteModule)  },
  {path: "crearPqrs", component: CrearPQRSComponent},
  {path: "detallePqrs/:codigoPqrs", component: DetallePqrsComponent},
  {path: "gestionPqrs", component:GestionPqrsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
