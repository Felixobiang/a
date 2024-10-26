import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentsComponent,
    MaterialModule
  
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    CommentsComponent,
    MaterialModule
    
  ]
})
export class SharedModule { }
