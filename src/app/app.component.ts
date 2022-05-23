import { Component } from '@angular/core';
import { Menu } from './core/models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FrontendPrueba';

  //Ideal definirlos en una BD para dejar una lado el codigo duro

  menus:Menu[]=[
    {
      idMenu:1,
      icono:'group',
      nombre:'Usuarios',
      url:'/listar-usuarios'
    },
  ];

}
