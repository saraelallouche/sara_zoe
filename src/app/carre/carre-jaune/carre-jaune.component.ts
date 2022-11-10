import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre-jaune',
  templateUrl: './carre-jaune.component.html',
  styleUrls: ['./carre-jaune.component.scss']
})
export class CarreJauneComponent implements OnInit {

  @Output() color:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(){
    this.color.emit("jaune");
  }
}
