import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // 1. Quitamos AppComponent de aquí porque es un componente standalone
  declarations: [
    AppComponent // <--- ¡Vuelve aquí!
  ], 
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // 2. Importamos el componente aquí, para que el módulo pueda usarlo
    AppComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }