import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {

  title: string = "";
  username: string = "Flavian";
  color: string;

  constructor() { }

  ngOnInit() {
    this.title = "blop"
  }

}
