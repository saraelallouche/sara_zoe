import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarreComponent } from './carre/carre.component';
import { CarreOrangeComponent } from './carre/carre-orange/carre-orange.component';
import { CarreVertComponent } from './carre/carre-vert/carre-vert.component';
import { CarreBleuComponent } from './carre/carre-bleu/carre-bleu.component';
import { CarreJauneComponent } from './carre/carre-jaune/carre-jaune.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarreComponent,
    CarreOrangeComponent,
    CarreVertComponent,
    CarreBleuComponent,
    CarreJauneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
