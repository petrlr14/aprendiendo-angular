/*aqui va toda la configuracion de rutas en angular*/

/*importacion de modulos de router de angular*/
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
/*Importar componentes*/
import {HomeComponent} from './m_components/home/home.component';
import {ZapatillasComponent} from './m_components/zapatillas/zapatillas.component';
import {VideojuegoComponent} from './m_components/videojuego/videojuego.component';
import {CursosComponent} from './m_components/cursos/cursos.component';
import {ExternoComponent} from './m_components/externo/externo.component';
import {ContactComponent} from './m_components/contact/contact.component';

/*Array de rutas donde se dan de alta*/
const appRoutes: Routes = [
   {path: ''/*si se deja vacio se carga por defecto*/, component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuegos', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component:HomeComponent}/*se define el 404, siempre al final de las rutas*/
];

/*exportacion del modulo de routing*/
export const appRoutingProviders:any[]=[];/*un servicio de routing*/
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);/*se da de alta la configuracion de routing*/
