import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';
import {ZapatillaService} from './services/zapatilla.service';
import {HttpClientModule} from '@angular/common/http';/*modulo para trabajar con peticiones ajax*/

import {AppComponent} from './app.component';
import {VideojuegoComponent} from './m_components/videojuego/videojuego.component';
import {ZapatillasComponent} from './m_components/zapatillas/zapatillas.component';
import { CursosComponent } from './m_components/cursos/cursos.component';
import { HomeComponent } from './m_components/home/home.component';
import { ExternoComponent } from './m_components/externo/externo.component';
import {PeticionesService} from './services/peticiones.service';
import {CalculadoraPipe} from './pipes/calculadora.pipe';
import { ContactComponent } from './m_components/contact/contact.component';

@NgModule({
  declarations: [/*aqui se cargan los componentes, tambien las pipes*/
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactComponent
  ],
  imports: [/*aqui se cargan los modulos*/
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [/*aqui se cargan servicios*/
    appRoutingProviders,
    ZapatillaService,
    PeticionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
