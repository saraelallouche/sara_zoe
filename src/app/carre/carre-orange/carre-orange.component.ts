import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre-orange',
  templateUrl: './carre-orange.component.html',
  styleUrls: ['./carre-orange.component.scss']
})
export class CarreOrangeComponent implements OnInit {

  @Output() color: string | undefined ;


  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(){
    this.color = "orange";
  }

}
