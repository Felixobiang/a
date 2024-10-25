import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { provideRouter, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SocialMediaRoutingModule,
    PostListComponent,
    PostListItemComponent
    
  ],
  exports:[],
  providers:[PostsService,
  PostsResolver,
  ]
})
export class SocialMediaModule { }
