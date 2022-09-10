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

  addPendiente(pendiente: Pendiente) {
    return this.http.post(`${this.baseUrl}/post.php`, pendiente);
  }

  deletePendiente(pendiente: Pendiente) {
    return this.http.delete(`${this.baseUrl}/delete.php?idPendiente=${pendiente.id}`);
  }

  updatePendiente(pendiente: Pendiente) {
    return this.http.put(`${this.baseUrl}/update.php`, pendiente);
  }
}
