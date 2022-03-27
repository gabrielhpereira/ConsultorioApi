import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosComponent } from './medicos/medicos.component';
import { CadastrarMedicosComponent } from './cadastrar-medicos/cadastrar-medicos.component';

@NgModule({
  declarations: [
    MedicosComponent,
    CadastrarMedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    AppMaterialModule,
    SharedModule
    ]
})
export class MedicosModule { }
