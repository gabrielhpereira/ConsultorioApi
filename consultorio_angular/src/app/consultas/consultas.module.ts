import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas/consultas.component';
import { CadastrarConsultasComponent } from './cadastrar-consultas/cadastrar-consultas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultasComponent,
    CadastrarConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule
    ]
})
export class ConsultasModule { }
