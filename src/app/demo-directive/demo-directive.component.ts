import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {
  array: Array<string>;
  cpt: number;
  cptIncrement: string;

  constructor() { }

  ngOnInit() {
    this.array = new Array<string>();

    this.array.push("Blop", "Plop", "Biblop", "Pataclop");
    this.cpt = 0;
    this.cptIncrement = '1';
  }


  ajouter(): void{
    this.cpt += Number(this.cptIncrement);
  }

  retirer() {
    this.cpt -= Number(this.cptIncrement);
  }

  changeValue(select: HTMLSelectElement) {
    this.cptIncrement = select.value;
  }
}
