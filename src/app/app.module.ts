import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicialComponent } from './Inicial/inicial.component';
import { GerraAustraliaComponent } from './Museus/gerra-australia/gerra-australia.component';
import { MelbourneComponent } from './Museus/melbourne/melbourne.component';
import { SouthWalesComponent } from './Museus/south-wales/south-wales.component';
import { NationalAustralianComponent } from './Museus/national-australian/national-australian.component';
import { LouvreComponent } from './Museus/louvre/louvre.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    GerraAustraliaComponent,
    MelbourneComponent,
    SouthWalesComponent,
    NationalAustralianComponent,
    LouvreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
