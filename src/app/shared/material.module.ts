import { NgModule } from '@angular/core';
import { NgIf,NgFor,DatePipe,AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@NgModule({
  
    imports:[
        MatList,
         MatListItem,
         MatNavList,
         MatSelectModule,
         NgIf,
         NgFor,
         DatePipe,
        AsyncPipe,
      RouterLink],
    exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AsyncPipe,
    RouterLink,
    MatNavList,
    MatList,
    MatListItem,
    MatCheckboxModule,
    MatRadioModule,
    NgIf,
    NgFor,
    DatePipe,
    MatProgressSpinnerModule

  ],
  
})
export class MaterialModule {}