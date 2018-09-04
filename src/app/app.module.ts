import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Exo1Component } from './exo1/exo1.component';
import { MenuComponent } from './exo1/menu/menu.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { Exo2Component } from './exo2/exo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Exo1Component,
    MenuComponent,
    DemoDirectiveComponent,
    Exo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [Exo2Component]
})
export class AppModule { }
