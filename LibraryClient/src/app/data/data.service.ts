import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable()
export class DataService {

  constructor(
    private httpClient:HttpClient,
    private authService:AuthenticationService
  ) { }

  getUser(){
    let headers:HttpHeaders = new HttpHeaders().set('Authorization', 'JWT ' + this.authService.getToken() );
    return this.httpClient.get( 'http://localhost:8000/user/' ,  {headers:headers});
  }

}
