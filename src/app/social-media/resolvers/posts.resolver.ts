import {  inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  provideRouter,  Resolve,  ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Observable } from 'rxjs';
import { PostListComponent } from '../components/post-list/post-list.component';



@Injectable()
export class PostsResolver implements Resolve<Post[]> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}






