import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { RecuperarContrasenaComponent } from './pagina/recuperar-contrasena/recuperar-contrasena.component';
import { CrearPQRSComponent } from './pagina/paciente/crear-pqrs/crear-pqrs.component';
import { ImagenesComponent } from './pagina/imagenes/imagenes.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    RecuperarContrasenaComponent,
    CrearPQRSComponent,
    ImagenesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }