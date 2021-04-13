import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private api : ApiService){

    }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let user = JSON.parse(localStorage.getItem('userData'));
    if(user != undefined){
        console.log("set auth token")
        req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${user.token}`)
        })
    }
    return next.handle(req);
  }
}