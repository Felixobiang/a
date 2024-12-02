import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-new-candidate',
  standalone: true,
  imports: [MaterialModule,SharedModule],
  templateUrl: './new-candidate.component.html',
  styleUrl: './new-candidate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCandidateComponent implements OnInit {


  candidateForm!: FormGroup;
  personalInfoForm!: FormGroup;
  professionalInfoForm!: FormGroup;
  email!: FormControl;
  
  


  loading = false;

  constructor(private formBuilder: FormBuilder, private candidatesService : CandidatesService) { }

  ngOnInit(): void {
   
    this.initCandidateForm();
    
  }

  onSubmitForm() {
    this.loading=true;
    console.log(this.candidateForm.value);
    this.candidatesService.addCandidate(this.candidateForm.value)
    this.resetForm();
    this.loading=false;
}

private resetForm() {
  this.candidateForm.reset();
}
  private initCandidateForm(): void {
    this.candidateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      job: ['', Validators.required],
      department: ['', Validators.required],
      company: ['', Validators.required],
      imageUrl: ['', Validators.required]
 
       
    });
  }


getFormControlErrorText(ctrl: AbstractControl) {
  if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
  } else if (ctrl.hasError('email')) {
      return 'Merci d\'entrer une adresse mail valide';
  } 
 
  else {
      return 'Ce champ contient une erreur';
  }
}
}
