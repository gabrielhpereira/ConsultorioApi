import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private readonly API = '/api/medicos/';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Medico[]>(this.API);
  }
}
