import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit{

  loading$!: Observable<boolean>;

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.loading$ = this.candidatesService.loading$;
  }

}
