import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre-vert',
  templateUrl: './carre-vert.component.html',
  styleUrls: ['./carre-vert.component.scss']
})
export class CarreVertComponent implements OnInit {

  @Output() color:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(){
    this.color.emit("vert");
  }
}
