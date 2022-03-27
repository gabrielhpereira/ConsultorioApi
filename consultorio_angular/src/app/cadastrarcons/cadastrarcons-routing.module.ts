import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarconsComponent } from './cadastrarcons/cadastrarcons.component';
const routes: Routes = [
  { path: '', component: CadastrarconsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarconsRoutingModule { }
