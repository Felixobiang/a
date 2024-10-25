import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostsService } from './services/posts.service';

const routes: Routes = [
  { path: '', component: PostListComponent, resolve: { posts: PostsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    PostsService,
    PostsResolver
  ],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
