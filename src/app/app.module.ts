import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTableModule,
  SharedModule,
  ButtonModule
   } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {ScenariosService} from "./scenarios.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    ButtonModule
  ],
  providers: [
    ScenariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
