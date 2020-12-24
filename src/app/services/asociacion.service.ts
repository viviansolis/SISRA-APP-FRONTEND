import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {  TipoAsociacion} from '../models/TipoAsociacion';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable, of , throwError} from 'rxjs';
import {catchError,  map} from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Asociacion } from '../models/asociacion';


@Injectable({
  providedIn: 'root'
})
export class AsociacionService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private tipo_asociacion = 'http://localhost:8080/tipo';
  private asociacionurl ='http://localhost:8080/asoc';
  private docUrl:string = 'http://localhost:8080/documento/req';

  constructor(private http: HttpClient , private router:Router, private authService:AuthService) { }

  private addAuthorizationHeader(){
    let token = this.authService.token;

    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.httpHeaders;
  }
  private isNoAutorization(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }

  getTipoAsociaciones():Observable<any>{
    return this.http.get(this.tipo_asociacion+'/all').pipe(
      catchError(e =>{
        this.router.navigate(['/registrar']);
        console.error(e.error.mensaje);
        return throwError(e);
      })
    )
  }
  gettipoasociacion():Observable<Object[]>{
    return this.http.get<Object[]>(this.tipo_asociacion+'/all');
  }
  addasociacion(asociacion:Asociacion): Observable<any>{
    return this.http.post<Asociacion>(this.asociacionurl+'/add', asociacion, {headers:this.httpHeaders});
  }
  deleteAsociacion(id:number): Observable<any>{
    return this.http.delete<any>(this.asociacionurl+'/delete/'+id,{headers:this.httpHeaders});
  }
  getAsociacion(): Observable<Object> {
    return this.http.get<Object>(this.asociacionurl+ '/all');

  }
  getAsociaciones():Observable<any>{
    return this.http.get(this.asociacionurl+'/allasc').pipe(
      catchError(e =>{
        this.isNoAutorization(e);
        return e;
      }

      )
    );
  }
  getReq(id:number):Observable<any> {
    alert(id);
    return this.http.get(`${this.docUrl}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/listasc']);
        console.error(e.error.mensaje);
        Swal.fire('Error No Documentos', e.error.mensaje, 'error');
          return e;
      })
    );
  }
  Req_apro(id:number):Observable<any> {
    alert(id);
    return this.http.get<number>(`${this.docUrl}/apro/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/listasc']);
        console.error(e.error.mensaje);
        Swal.fire('Error No Documentos', e.error.mensaje, 'error');
          return e;

      })
    );
  }

  Req_repro(id:number):Observable<any> {
    alert(id);
    return this.http.get<number>(`${this.docUrl}/repro/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/listasc']);
        console.error(e.error.mensaje);
        Swal.fire('Error No Documentos', e.error.mensaje, 'error');
          return e;

      })
    );
  }
}
