import { NgModule } from '@angular/core';
import { NgBubbleInputComponent } from './ng-bubble-input.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [NgBubbleInputComponent],
    imports: [
        CommonModule
    ],
  exports: [NgBubbleInputComponent]
})
export class NgBubbleInputModule { }
