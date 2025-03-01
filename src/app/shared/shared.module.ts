import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';



@NgModule({
  declarations: [ShortenPipe,UsernamePipe],
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
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe
    
  ]
})
export class SharedModule { }
