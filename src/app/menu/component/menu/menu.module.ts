import { NgModule } from '@angular/core';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [   
    MenuRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MaterialModule
  ],
  exports:[
    MenuComponent 
  ]
})
export class MenuModule { }
