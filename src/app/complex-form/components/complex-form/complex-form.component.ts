import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initMainForm();
  }
  onSubmitForm() {
    
    }
  initMainForm(): void {
    this.mainForm = this.formBuilder.group({});
  }

}
