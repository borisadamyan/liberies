import { NgBubbleInputComponent } from './ng-bubble-input.component';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [NgBubbleInputComponent],
    imports: [
        CommonModule
    ],
  exports: [NgBubbleInputComponent]
})
export class NgBubbleInputModule { }
