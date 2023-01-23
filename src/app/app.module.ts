import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClienteRoutingModule} from './cliente/component/cliente/cliente-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BlockUIModule} from 'ng-block-ui';
import {MaterialModule} from './material/material.module';
import {MenuModule} from './menu/component/menu/menu.module';
import {LayoutComponent} from './layout/layout/layout.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario/component/usuario-router.module';
//import { UsuarioRoutingModule } from './usuario/usuario-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    BlockUIModule.forRoot(),
    MaterialModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    UsuarioRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
