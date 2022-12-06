import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ListeFormationComponent } from './_page/liste-formation/liste-formation.component';
import { ListeStagiaireComponent } from './_page/liste-stagiaire/liste-stagiaire.component';
import { AjoutStagiaireComponent } from './_page/ajout-stagiaire/ajout-stagiaire.component';
import { AjoutFormationComponent } from './_page/ajout-formation/ajout-formation.component';
import { LoginComponent } from './_page/login/login.component';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ListeFormationComponent,
    ListeStagiaireComponent,
    AjoutStagiaireComponent,
    AjoutFormationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

