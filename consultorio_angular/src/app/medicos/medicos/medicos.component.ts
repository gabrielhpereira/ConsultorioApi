import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Medico } from '../model/medico';
import { MedicosService } from '../service/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  medicos$: Observable<Medico[]>;

  displayedColumns = ['nome','idade','crm'];


  constructor(
    private MedicosService: MedicosService,
    public dialog: MatDialog
  ) {
    this.medicos$ = this.MedicosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar medicos.');
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
