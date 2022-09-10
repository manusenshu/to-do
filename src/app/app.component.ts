import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../css/estilo.css',
    '../../css/preview.css',
    '../../css/css2.css',
    '../../css/montserrat.css',
  ],
})
export class AppComponent {
  name = 'TO-DO';
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pendiente } from "./pendiente"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class PendientesService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getPendientes() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getPendiente(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idPendiente=${id}`);
  }

  addPendiente(Pendiente: Pendiente) {
    return this.http.post(`${this.baseUrl}/post.php`, Pendiente);
  }

  deletePendiente(Pendiente: Pendiente) {
    return this.http.delete(`${this.baseUrl}/delete.php?idPendiente=${Pendiente.id}`);
  }

  updatePendiente(Pendiente: Pendiente) {
    return this.http.put(`${this.baseUrl}/update.php`, Pendiente);
  }
}