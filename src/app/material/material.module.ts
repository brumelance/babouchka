import { NgModule } from '@angular/core';
import { 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatSelectModule
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
