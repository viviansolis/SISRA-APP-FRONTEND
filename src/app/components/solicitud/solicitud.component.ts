import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {  TipoAsociacion} from 'src/app/models/TipoAsociacion';
import { AsociacionService} from 'src/app/services/asociacion.service';
import {Asociacion} from 'src/app/models/asociacion';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
lista: any;
asociacionModel:Asociacion = new Asociacion();
selectedIdTipo: number = null;
  authService: AuthService;
  usuario:Usuario;

  constructor(private asociacionService:AsociacionService,private router:Router,) { }


 ngOnInit():void {
   this.listar();

}

  listar():void{
    this.asociacionService.getTipoAsociaciones().subscribe(
      (data) => {
        console.log(data[0]['CUR_T_ASOCIACION']);
        this.lista = data[0]['CUR_T_ASOCIACION'];
    });
  }
 create():void{
   this.asociacionModel.estado="Pendiente";
   this.asociacionModel.casa_vecinal_id_asc_cv=1;
  console.log(this.asociacionModel);
    this.asociacionService.addasociacion(this.asociacionModel).subscribe(
      Response=>{
        console.log(Response);
        swal.fire('Nueva Solicitud', `Solicitud creada con exito`, "success")

        this.router.navigate(['/listar'])

      }
    )
  }
 obtenerselect(event:any){
    this.selectedIdTipo=event.target.value;
    console.log(this.selectedIdTipo);

  }
  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal.fire('Logout', `Hola ${this.usuario.username}, has cerrado sesión con éxito`, 'success')
    this.router.navigate(['/']);
  }
}
