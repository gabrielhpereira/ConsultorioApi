import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
