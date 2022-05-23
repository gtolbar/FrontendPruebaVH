import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './core/components/listar-usuarios/listar-usuarios.component';
import { NotFound404Component } from './core/shared/not-found404/not-found404.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'listar-usuarios'

  },
  {
    path:'listar-usuarios',
    component:ListarUsuariosComponent
  },
  {
    path:'not-found-404',
    component:NotFound404Component
  },
  {
    path:'**',redirectTo:'not-found-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
