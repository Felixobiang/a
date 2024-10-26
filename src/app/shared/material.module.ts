import { NgModule } from '@angular/core';
import { NgIf,NgFor,DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  
    imports:[
        MatList,
         MatListItem,
         NgIf,
         NgFor,
         DatePipe],
    exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatList,
    MatListItem,
    NgIf,
    NgFor,
    DatePipe
  ],
  
})
export class MaterialModule {}