import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ListService } from './services/list.service';
import { TrasformWordPipe } from './pipes/trasform-word.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TrasformWordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
