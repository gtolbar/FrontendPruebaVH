import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { RegistrarUsuarioComponent } from '../registrar-usuario/registrar-usuario.component';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['id', 'nombre', 'telefono','identificacion', 'acciones'];
  identificacionFormControl:FormGroup;

  form:FormGroup;

  constructor(
    private userService:UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'identificacion': new FormControl(''),
    });

    this.listarTabla();

    this.userService.getUserCambio().subscribe(data => {
      this.crearTabla(data);
    });

    this.userService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000,
        verticalPosition: "bottom",
        horizontalPosition: "center"
      });
    });

  }

  listarTabla(){
    this.userService.listar().subscribe(data=>{
      this.crearTabla(data);
    });
  }


  eliminar(id:number){
    this.userService.eliminar(id).subscribe(()=>{
      this.userService.listar().subscribe(data=>{
        this.userService.setUsercambio(data);
        this.userService.setMensajeCambio("SE ELIMINO USUARIO");
      })
    });
  }

  crearTabla(data: User[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }

  actualizar(user:User){
    this.dialog.open(RegistrarUsuarioComponent, {
      height: '600px',
      width: '400px',
      data:user,
    });
  }

  registrar(){
    this.dialog.open(RegistrarUsuarioComponent, {
      height: '600px',
      width: '400px',
    });
  }

  buscar(){
    let identificacion=this.form.value['identificacion'];
    this.userService.buscarIdentifiacion(identificacion).subscribe(data=>{
      console.log(data);
        if (data) {
          this.userService.setUsercambio(data);
          this.userService.setMensajeCambio("BUSQUEDA REALIZADA");
        } else {
          this.userService.setMensajeCambio("NO SE ENCONTRO USUARIO");
        }
    });
  }
}
