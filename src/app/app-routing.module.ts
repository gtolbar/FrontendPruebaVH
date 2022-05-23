import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './core/components/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'listar-usuarios'

  },
  {
    path:'listar-usuarios',
    component:ListarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
