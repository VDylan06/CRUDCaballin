import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarCaballoComponent } from './components/agregar-editar-caballo/agregar-editar-caballo.component';
import { ListadoCaballoComponent } from './components/listado-caballo/listado-caballo.component';
import { VerCaballoComponent } from './components/ver-caballo/ver-caballo.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//modulos
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarCaballoComponent,
    ListadoCaballoComponent,
    VerCaballoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
