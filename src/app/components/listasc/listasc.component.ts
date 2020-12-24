import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AsociacionService} from 'src/app/services/asociacion.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listasc',
  templateUrl: './listasc.component.html',
  styleUrls: ['./listasc.component.css']
})

export class ListascComponent implements OnInit {
  asociaciones: any;

  documentos : any;

  constructor(private ascService:AsociacionService, private router:Router) {

  }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.ascService.getAsociaciones().subscribe(
      (data)=>{
        this.asociaciones = data['cursor_asociacion'];
        console.log("Asociaciones", this.asociaciones);

      }
    )
  }
  cargarReq(num:number):void{
    if(num){
      this.ascService.getReq(num).subscribe(
        (data)=>{
        this.documentos=data['cursor_r'];
        console.log( "Documentos", this.documentos);
      })
    }
}
reqapro(num:number):void{
  if(num){
    this.ascService.Req_apro(num).subscribe(
      response => {(response)

        swal.fire({title:'Aprobado..!',
                  icon: 'success'});
        this.cargarReq(this.documentos.id_asoc);
        console.log(this.documentos.id_asoc);
        })
    }
}

reqrepro(num:number):void{
  swal.fire({
    title: 'Estas seguro?',
    text: "No podras reverti esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Reprobar!'
  }).then((result) => {
  if(result.isConfirmed){
    this.ascService.Req_repro(num).subscribe(
      response => {(response)

        swal.fire('Reprobado..!', 'error');
        this.cargarReq(this.documentos.id_asoc);
        })
    }
  })
}
}
