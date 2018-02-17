import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  user : User = new User();

  ngOnInit() {
  }

  singIn(){

    console.log("Chamou 2!!!");

    this.authenticationService.login(this.user).subscribe(
      (data:any) => {
        console.log("Certo");
      } ,
      error => {
        console.log("Erro");
      }
      );

  }

}
