
import { MenuComponent } from './components/template/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { ListarasocComponent } from './components/listarasoc/listarasoc.component';
import { ListascComponent } from './components/listasc/listasc.component';
import { ListarreqlistReqascComponent } from './components/listarreqlist-reqasc/listarreqlist-reqasc.component';
import {FooterComponent} from './components/template/footer/footer.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'footer', component:FooterComponent},
  {path:'menu', component:MenuComponent},
  {path: 'registrar',component: SolicitudComponent},
  {path: 'listar', component: ListarasocComponent},
  {path: 'listarasc', component: ListascComponent},
  {path: 'Listreq', component: ListarreqlistReqascComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
