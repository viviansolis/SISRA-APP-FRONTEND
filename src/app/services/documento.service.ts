import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {Observable, of, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private docUrlreq:string = 'http://localhost:8080/documento/list_req';
  private docUrlhis:string = 'http://localhost:8080/documento/his';
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { }

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

  getReq(id:number):Observable<any> {
    return this.http.get(`${this.docUrlreq}/${id}`,{headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.router.navigate(['/listasc']);
        console.error(e.error.mensaje);
        Swal.fire('Error No Documentos', e.error.mensaje, 'error');
          return e;
      })
    );
  }
  gethis(id:number,id2:number):Observable<any> {
    return this.http.get(`${this.docUrlhis}/asc=${id}/doc=${id2}`,{headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.router.navigate(['/listasc']);
        console.error(e.error.mensaje);
        Swal.fire('Error No Documentos', e.error.mensaje, 'error');
          return e;
      })
    );
  }
}
