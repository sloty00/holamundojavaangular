import { Component, OnInit } from '@angular/core';
import { SaludoService } from './servicios/saludo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // Aquí NO incluimos standalone: true, para que trabaje con el módulo tradicional
})
export class AppComponent implements OnInit {
  titulo = 'hola-mundo-angular';
  mensajeBackend = '';

  constructor(private saludoService: SaludoService) {}

  ngOnInit() {
    this.saludoService.obtenerSaludo().subscribe({
      next: (res) => this.mensajeBackend = res,
      error: (err) => console.error('Error al conectar con Java:', err)
    });
  }
}