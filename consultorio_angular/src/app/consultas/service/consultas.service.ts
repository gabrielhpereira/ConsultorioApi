import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';

import { Consulta } from '../model/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private readonly API = 'api/consultas/';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Consulta[]>(this.API);
  }

  create(Consulta: any) {
    return this.httpClient.post(this.API, Consulta).pipe(take(1));
  }

}
