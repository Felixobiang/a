import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveStateRoutingModule } from './reactive-state-routing.module';
import { CandidatesService } from './services/candidates.service';
import { SharedModule } from '../shared/shared.module';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { SingleCandidateComponent } from './components/single-candidate/single-candidate.component';


@NgModule({
  declarations: [],
  imports: [
    CandidateListComponent,
    SingleCandidateComponent,
    CommonModule,
    ReactiveStateRoutingModule,
    SharedModule
  ],
  providers:[CandidatesService]
})
export class ReactiveStateModule { }
