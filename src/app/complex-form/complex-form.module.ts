import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf,NgFor,DatePipe,AsyncPipe } from '@angular/common';
import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { ComplexFormService } from './services/complex-form.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    SharedModule,
    ComplexFormComponent,
    AsyncPipe
    
  ],
  providers:[ComplexFormService]
})
export class ComplexFormModule { }
