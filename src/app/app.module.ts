import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import {EmpleadosComponent} from './empleados/empleados.component';

@NgModule({
  declarations: [
    AppComponent,  EmpleadoComponent, EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
