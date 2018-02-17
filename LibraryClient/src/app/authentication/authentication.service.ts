import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  login( User ){
    let headers:HttpHeaders = new HttpHeaders();
    return this.httpClient.post( 'http://localhost:8000/auth-jwt/' , User , {headers:headers});
  }

}
