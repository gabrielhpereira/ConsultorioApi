import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Consulta } from '../model/consulta';
import { ConsultasService } from '../service/consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {

  consultas$: Observable<Consulta[]>;

  displayedColumns = ['nome_paciente','especialidade_medica','nome_medico','crm_medico','data_consulta','numero_consultorio'];


  constructor(
    private ConsultasService: ConsultasService,
    public dialog: MatDialog
  ) {
    this.consultas$ = this.ConsultasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar consultas.');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
