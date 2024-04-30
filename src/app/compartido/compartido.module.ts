import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { BuscarComponent } from './buscar/buscar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ServicioComponent } from './servicio/servicio.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { OpinionComponent } from './opinion/opinion.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    LayoutComponent,
    BuscarComponent,
    ServicioComponent,
    CuidadorComponent,
    OpinionComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule, MaterialModule, LayoutRoutingModule, GoogleMapsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    LayoutComponent,
    BuscarComponent,
    ServicioComponent

  ]
})
export class CompartidoModule { }