import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    ConsultasComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule
    ]
})
export class ConsultasModule { }
