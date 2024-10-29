import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MaterialModule } from '../../../shared/material.module';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-complex-form',
  standalone: true,
  imports: [MaterialModule,SharedModule],
  templateUrl: './complex-form.component.html',
  styleUrl: './complex-form.component.scss'
})
export class ComplexFormComponent implements OnInit {


  mainForm!: FormGroup;
  personalInfoForm!: FormGroup;
  contactPreferenceCtrl!: FormControl;
  emailCtrl!: FormControl;
  confirmEmailCtrl!: FormControl;
   emailForm!: FormGroup;
  phoneCtrl!: FormControl;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  loginInfoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
  }
  onSubmitForm() {
    console.log(this.mainForm.value);
    }
  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({

      personalInfo: this.personalInfoForm,
        contactPreference: this.contactPreferenceCtrl,
        email: this.emailForm,
        phone: this.phoneCtrl,
        loginInfo: this.loginInfoForm
    });
  }
  private initFormControls(): void {
    this.personalInfoForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
    });
    this.contactPreferenceCtrl = this.formBuilder.control('email');
    this.emailCtrl = this.formBuilder.control('', Validators.required);
    this.confirmEmailCtrl = this.formBuilder.control('', Validators.required);
    this.emailForm = this.formBuilder.group({
        email: this.emailCtrl,
        confirm: this.confirmEmailCtrl
});
    this.phoneCtrl = this.formBuilder.control('');
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);
this.loginInfoForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: this.passwordCtrl,
    confirmPassword: this.confirmPasswordCtrl
});
}

}
