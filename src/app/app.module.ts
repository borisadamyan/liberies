import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {NgBubbleInputModule} from 'ng-bubble-input';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBubbleInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
