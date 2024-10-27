import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';
import { TitleCasePipe,DatePipe ,NgIf} from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CommentsComponent } from '../../../shared/components/comments/comments.component';

@Component({
  selector: 'app-post-list-item',
  standalone:true,
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss',
  imports:[
    TitleCasePipe,
    SharedModule,
    DatePipe,
    NgIf
  ]
})
export class PostListItemComponent implements OnInit {



  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number }>();
  tempUser = {firstName:'Joey', lastName:'Obiang'};


ngOnInit(): void {
  
}
onNewComment(comment: string) {

  this.postCommented.emit({ comment, postId: this.post.id });
}
}

