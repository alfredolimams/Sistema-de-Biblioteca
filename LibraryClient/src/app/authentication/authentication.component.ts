import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {AuthenticationService} from './authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService:AuthenticationService) { }

  user : User = new User();

  token: string = "";

  ngOnInit() {
  }

  singIn(){

    this.authenticationService.login(this.user).subscribe(
      (data:any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['']);
      } ,
      error => {
        alert("Erro na autenticação!");
      }
      );

  }

}
