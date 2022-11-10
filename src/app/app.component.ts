import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tp1';
  public couleur : string ='';

  changeColor( color: string) {
    this.couleur = color;
  }

}
