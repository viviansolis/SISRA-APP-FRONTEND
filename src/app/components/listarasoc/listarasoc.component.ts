import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asociacion } from 'src/app/models/asociacion';
import {AsociacionService} from 'src/app/services/asociacion.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listarasoc',
  templateUrl: './listarasoc.component.html',
  styleUrls: ['./listarasoc.component.css']
})
export class ListarasocComponent implements OnInit {
  listAsociacion: [];
  asociaciones: Asociacion;
  constructor(private asociacionService:AsociacionService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(): void{
    this.asociacionService.getAsociacion().subscribe((data)=>{

      this.asociaciones=data[0]['cursor_asociacion'];
      console.log(data[0]['cursor_asociacion']);
    })
  }
  deleteAsociacion(num:number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar de todos modos!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listar();
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success')
        }
      this.asociacionService.deleteAsociacion(num).subscribe(
        response=>{
          console.log(response);
        })
    })
  }
}
