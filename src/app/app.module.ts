import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {NgBubbleInputModule} from 'ng-bubble-input/src/lib/ng-bubble-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBubbleInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
