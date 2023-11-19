import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../servicios/token.service';
import { AuthService } from '../servicios/auth.service';

const AUTHORIZATION= "Authorization";
const BEARER = "Bearer";
@Injectable()
export class UsuarioInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiUrl = request.url.includes("api/auth");
    const urlClinica = request.url.includes("api/clinica");
    if( !this.tokenService.isLogged() || isApiUrl || urlClinica ){
      return next.handle(request);
    }
    let initReq= request;
    let token = this.tokenService.getToken();
    initReq = this.addToken(request, token!);
    
    return next.handle(initReq);
  }

  private addToken(req: HttpRequest<any>, token:string): HttpRequest<any> {
    return req.clone({headers: req.headers.set(AUTHORIZATION,BEARER + token)});
  }
}
