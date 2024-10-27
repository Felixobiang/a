import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule
  
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule
    
  ]
})
export class SharedModule { }
