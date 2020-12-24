import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DocumentoService } from 'src/app/services/documento.service';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'app-listarreqlist-reqasc',
  templateUrl: './listarreqlist-reqasc.component.html',
  styleUrls: ['./listarreqlist-reqasc.component.css']
})
export class ListarreqlistReqascComponent implements OnInit {

  private archivoseleccionado: File;

  reqasc: any;
  reqhis: any;

  constructor(private http: HttpClient, private reqService: DocumentoService, private route: Router, private uploadsService: UploadsService) { }

  ngOnInit(): void {

    this.cargarReq(2);


  }

  cargarReq(num: number) {
    this.route.navigate(['/listreq']);
    if (num) {
      this.reqService.getReq(num).subscribe(
        (data) => {
          this.reqasc = data['cursor_r'];
          console.log("Documentos", this.reqasc);
          this.route.navigate(['/listreq']);
        })
    }
  }

  cargarHIS(num: number, num2: number) {
    alert(num);
    alert(num2);
    if (num) {
      this.reqService.gethis(num, num2).subscribe(
        (data) => {
          this.reqhis = data['cursor_his'];
          console.log("Documentos", this.reqhis);
        })
    }
  }
  public seleccionarArchivo(event) {
    this.archivoseleccionado = event.target.files[0];
    console.log(this.archivoseleccionado);
  }
  obtenerArchivo() {
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let id: any = user.id_usua;
    alert(id);
    this.uploadsService.uploadArchivo(this.archivoseleccionado, id).subscribe(
      response => {
        swal.fire('Archivo', 'Guardado correctamente...!', "success")
      })
  }

}
