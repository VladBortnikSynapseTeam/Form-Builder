import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPageRoutingModule } from './form-page-routing.module';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormBuilderComponent
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ]
})
export class FormPageModule { }
