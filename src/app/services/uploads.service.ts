import  swal  from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  private httpHeaders = new HttpHeaders();
  private url:string = 'http://localhost:8080/archivos/upload';//endpoint
  //archivos/upload
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { }
    private addAuthorizationHeader(){
      let token = sessionStorage.getItem('token');
      console.log(token);
      if(token!=null){
        return this.httpHeaders.append('Authorization','Bearer '+ token);
      }else{
        console.log(token);
      }
      return this.httpHeaders;
    }
  uploadArchivo(archivo:File,id :number){
    var formData:any = new FormData();
    formData.append("archivo",archivo);
    formData.append("id",2);
    return this.http.post(this.url,formData,{headers:this.addAuthorizationHeader()}).pipe(
      map((response:any)=>console.log(response.usuario)),
      catchError(e=>{
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
      );
  }
}
