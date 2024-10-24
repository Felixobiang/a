import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';
import { SocialMediaRoutingModule } from './social-media-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers:[PostsService]
})
export class SocialMediaModule { }
