import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User>{

  private userCambio: Subject<User[]> = new Subject<User[]>();
  private mensajeCambio: Subject<string> = new Subject<string>();

  url:string=`${environment.HOST}/users`;

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.HOST}/users`);
  }

  buscarIdentifiacion(iden:number){
   return this.http.get<User[]>(`${this.url}/identificacion/${iden}`);
  }

  getUserCambio() {
    return this.userCambio.asObservable();
  }

  setUsercambio(lista: User[]) {
    this.userCambio.next(lista);
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

}
