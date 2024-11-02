import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { CandidatesService } from '../../services/candidates.service';
import { Candidate } from '../../models/candidate.model';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormControl } from '@angular/forms';
import { CandidateSearchType } from '../../enums/candidate-search-type.enum';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit{
//declare observable to get all candidate
  loading$!: Observable<boolean>;
  candidates$!: Observable<Candidate[]>;
// declare variable to implement thr research
  searchCtrl!: FormControl;
  searchTypeCtrl!: FormControl;

  constructor(private candidatesService: CandidatesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
    this.initForm();
    this.initObservables();
    this.candidatesService.getCandidatesFromServer();
  }
 
//init method that load spinner and get all candidate store in observable
  private initObservables() {
    this.loading$ = this.candidatesService.loading$;
         // init obersable de recherche
         const search$ = this.searchCtrl.valueChanges.pipe(
          startWith(this.searchCtrl.value),
          map(value => value.toLowerCase())
      );
        const searchType$: Observable<CandidateSearchType> = this.searchTypeCtrl.valueChanges.pipe(
          startWith(this.searchTypeCtrl.value)
      );
    this.candidates$ =  combineLatest([
      search$,
      searchType$,
      this.candidatesService.candidates$
      ]
  ).pipe(
      map(([search, searchType, candidates]) => candidates.filter(candidate => candidate[searchType]
          .toLowerCase()
          .includes(search as string))
      )
  );

}
//init form use to research
private initForm() {
  this.searchCtrl = this.formBuilder.control('');
  this.searchTypeCtrl = this.formBuilder.control(CandidateSearchType.LASTNAME);
  this.searchTypeOptions = [
      { value: CandidateSearchType.LASTNAME, label: 'Nom' },
      { value: CandidateSearchType.FIRSTNAME, label: 'Prénom' },
      { value: CandidateSearchType.COMPANY, label: 'Entreprise' }
  ];
}

searchTypeOptions!: {
  value: CandidateSearchType,
  label: string
}[];

}
