import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from '../form-builder/form-builder.component';

const routes: Routes = [
  {path: 'builder', component: FormBuilderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPageRoutingModule { }
