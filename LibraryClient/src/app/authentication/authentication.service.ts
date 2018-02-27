import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  login( User ){
    let headers:HttpHeaders = new HttpHeaders();
    return this.httpClient.post( 'http://localhost:8000/auth-jwt/' , User , {headers:headers});
  }

  verify(){
    let headers:HttpHeaders = new HttpHeaders();
    let token:any = { "token" : this.getToken() };
    return this.httpClient.post( 'http://localhost:8000/auth-jwt-verify/' , token , {headers:headers} );
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
