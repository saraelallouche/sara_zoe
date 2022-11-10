import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {

  public items: string []= [];

  @Output() color:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public addColor(color:string){
    this.color.emit(color);
  }

}
