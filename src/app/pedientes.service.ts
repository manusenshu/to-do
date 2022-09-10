import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pediente } from './pediente';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PedientesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPedientes() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getPediente(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idPendiente=${id}`);
  }

  addPediente(Pediente: Pediente) {
    return this.http.post(`${this.baseUrl}/post.php`, Pediente);
  }

  deletePediente(Pediente: Pediente) {
    return this.http.delete(
      `${this.baseUrl}/delete.php?idPendiente=${Pediente.id}`
    );
  }

  updatePediente(Pediente: Pediente) {
    return this.http.put(`${this.baseUrl}/update.php`, Pediente);
  }
}
