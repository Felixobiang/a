import { Component, Input } from '@angular/core';
import { Comment } from '../../../core/models/comment.model';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [MaterialModule,SharedModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @Input() comments!: Comment[];
}
