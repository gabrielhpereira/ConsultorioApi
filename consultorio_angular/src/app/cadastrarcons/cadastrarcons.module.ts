import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarconsRoutingModule } from './cadastrarcons-routing.module';
import { CadastrarconsComponent } from './cadastrarcons/cadastrarcons.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastrarconsComponent
  ],
  imports: [
    CommonModule,
    CadastrarconsRoutingModule,
    FormsModule
  ]
})
export class CadastrarconsModule { }
