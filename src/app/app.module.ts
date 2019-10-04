import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { AppComponent } from './app.component';
import {PostCreateComponent} from './post/post-create/post-create.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { ButtonMaterialComponent } from './button-material/button-material.component';
import { ProgressSpinnerMaterialComponent } from './progress-spinner-material/progress-spinner-material.component';
import { ProgressBarMaterialComponent } from './progress-bar-material/progress-bar-material.component';
import { IconMaterialComponent } from './icon-material/icon-material.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    DragdropComponent,
    ButtonMaterialComponent,
    ProgressSpinnerMaterialComponent,
    ProgressBarMaterialComponent,
    IconMaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
