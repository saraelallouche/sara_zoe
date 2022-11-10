import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre-bleu',
  templateUrl: './carre-bleu.component.html',
  styleUrls: ['./carre-bleu.component.scss']
})
export class CarreBleuComponent implements OnInit {

  @Output() color:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(){
    this.color.emit("bleu");
  }
}
