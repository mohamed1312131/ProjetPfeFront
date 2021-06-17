import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let authToken = this.authService.getAuthToken();
    if(authToken != null) {
      req = req.clone({
        setHeaders: {
          Authorization: authToken
        }
      })
    }

    return next.handle(req);
  }
}
