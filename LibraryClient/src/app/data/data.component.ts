import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(
    private dataService:DataService
  ) { }

  v:any;

  ngOnInit() {
    console.log("Chamou");
    this.dataService.getUser().subscribe(
      (data:any) => {
        console.log(data);
        this.v = data;
      } ,
      error => {
        alert("Erro em Data!");
        console.log(error);
      }
    );
  }



}
