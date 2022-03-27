import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consultas' },
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'medicos' },
  {
    path: 'medicos',
    loadChildren: () => import('./medicos/medicos.module').then(m=>m.MedicosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
