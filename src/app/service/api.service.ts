import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  apiUrl : string = environment.apiUrl;

  constructor(private http : HttpClient) { }

  login(creds : any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/login`, creds);
  }

  register(creds : any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/sign-up`, creds);
  }

  homeData() : Observable<any>{
    return this.http.get(`${this.apiUrl}/home`);
  }

  getEvents() : Observable<any> {
    return this.http.get(`${this.apiUrl}/events`);
  }

  createEvent(value: any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/event`, value);
  }
}
