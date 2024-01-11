import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftFormComponent } from './gift-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GiftFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [GiftFormComponent],
})
export class GiftFormModule {}
