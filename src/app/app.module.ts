import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './psg/head/head.component';
import { AdministracionMaterialesComponent } from './psg/administracion-materiales/administracion-materiales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AdministracionMaterialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
