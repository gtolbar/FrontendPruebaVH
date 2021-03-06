import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material/material.module';
import { ListarUsuariosComponent } from './core/components/listar-usuarios/listar-usuarios.component';
import { RegistrarUsuarioComponent } from './core/components/registrar-usuario/registrar-usuario.component';
import { NotFound404Component } from './core/shared/not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    RegistrarUsuarioComponent,
    NotFound404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
