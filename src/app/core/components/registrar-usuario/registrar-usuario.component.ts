import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  boton:string="";
  opcion:string[]=['Actualizar','Registrar'];

  edicion:boolean;

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegistrarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService:UserService,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'telefono': new FormControl(''),
      'identificacion': new FormControl('')
    });

    this.edicion=this.data?true:false;

    if(this.edicion){
      this.boton=this.opcion[0];
      this.construirForm(this.data);
      this.operar
    }else{
      this.boton=this.opcion[1];
    }


  }

  operar(){
    let usuario= new User();

    usuario.id=this.form.value['id'];
    usuario.nombre=this.form.value['nombre'];
    usuario.telefono=this.form.value['telefono'];
    usuario.identificacion=this.form.value['identificacion'];

    if (this.edicion) {
      this.userService.modificar(usuario).subscribe(()=>{
        this.userService.listar().subscribe(data=>{
          this.userService.setUsercambio(data);
          this.userService.setMensajeCambio("SE ACTUALIZO USUARIO");
        })
      });
      this.closedDialog();
    } else {
      this.userService.registrar(usuario).subscribe(()=>{
        this.userService.listar().subscribe(data=>{
          this.userService.setUsercambio(data);
          this.userService.setMensajeCambio("SE REGISTRO USUARIO");
        })
      });
      this.closedDialog();
    }
  }

  construirForm(data:User){
    this.form = new FormGroup({
      'id': new FormControl(data.id),
      'nombre': new FormControl(data.nombre),
      'telefono': new FormControl(data.telefono),
      'identificacion': new FormControl(data.identificacion),
    });
  }

  closedDialog(){
    this.dialogRef.close();
  }


}
