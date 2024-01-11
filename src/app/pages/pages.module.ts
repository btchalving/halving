import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { WorksComponent } from './works/works.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiftFormModule } from '../shared/components/gift-form/gift-form.module';

@NgModule({
  declarations: [
    ErrorPageComponent,
    HomeComponent,
    CurriculumComponent,
    WorksComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    GiftFormModule,
  ],
})
export class PagesModule {}
