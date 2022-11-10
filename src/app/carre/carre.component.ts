import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {

  public items: string []= [];

  constructor() { }

  ngOnInit(): void {
  }

  public addColor(newItem:string){
    this.items.push(newItem);
  }

}
