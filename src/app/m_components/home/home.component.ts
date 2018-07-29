import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _identified:boolean;

  constructor() {
    this._identified=true;
  }

  ngOnInit() {
  }

  idetified(){
    this._identified=!this._identified;
  }

}
