import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SaludoService {
  private apiUrl = 'http://localhost:8080/api/saludo';

  constructor(private http: HttpClient) {}

  obtenerSaludo(): Observable<string> {
    // Le decimos que esperamos un texto plano, no JSON, porque el backend devuelve un String
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}