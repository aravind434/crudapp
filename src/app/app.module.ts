import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { DisplaytodoComponent } from './displaytodo/displaytodo.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    DisplaytodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
