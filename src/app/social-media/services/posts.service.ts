import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { environment } from '../../environments/environment';
import { RouterModule, Routes } from '@angular/router';

@Injectable()
export class PostsService {
    addNewComment(postCommented: { comment: string; postId: number; }) {
      console.log(postCommented);
    }
    route!: Routes;
    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
    }
}