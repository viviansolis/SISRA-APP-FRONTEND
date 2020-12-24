import { UploadsService } from './services/uploads.service';
import { DocumentoService } from './services/documento.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './components/login/username/username.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RolService } from './services/rol.service';
import { AuthService } from './services/auth.service';
import { ProductoService } from './services/producto.service';
import { ListarasocComponent } from './components/listarasoc/listarasoc.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { AsociacionService } from './services/asociacion.service';
import { InterceptorService } from './interceptor/interceptor.service';
import { ListascComponent } from './components/listasc/listasc.component';
import { ListarreqlistReqascComponent } from './components/listarreqlist-reqasc/listarreqlist-reqasc.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    MenuComponent,
    FooterComponent,
    ListarComponent,
    LoginComponent,
    ProductoComponent,
    SolicitudComponent,
    ListarasocComponent,
    ListascComponent,
    ListarreqlistReqascComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RolService,AuthService,ProductoService, AsociacionService,DocumentoService,UploadsService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
