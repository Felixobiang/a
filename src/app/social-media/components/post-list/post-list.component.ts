import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Post } from '../../models/post.model';
import { AsyncPipe,NgFor ,TitleCasePipe} from '@angular/common';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-post-list',
  standalone:true,
  imports:[PostListItemComponent,NgFor,AsyncPipe,TitleCasePipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(private route: ActivatedRoute,private postsService:PostsService) { }

  ngOnInit(): void {
    

    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }
  onPostCommented(postCommented: { comment: string, postId: number }) {
    this.postsService.addNewComment(postCommented);
}

}