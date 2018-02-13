import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  user_name :string ;
  user_pswd :string ;
  ngOnInit() {
  }

  singIn(){
    console.log( this.user_name + this.user_pswd );
  }

  singUp(){

  }

}
