import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop'

import { AppComponent } from './app.component';
import {PostCreateComponent} from './post/post-create/post-create.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    DragdropComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
