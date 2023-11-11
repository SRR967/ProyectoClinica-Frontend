import { Component } from '@angular/core';
import { LoginDto } from 'src/app/modelo/dto/loginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDto: LoginDto;

  constructor(){
    this.loginDto = new LoginDto;
  }

  ingresar(){
    console.log(this.loginDto)
  }


}
