import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultasComponent } from './consultas/consultas.component';

const routes: Routes = [
  { path: '', component: ConsultasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
