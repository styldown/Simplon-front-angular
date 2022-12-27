import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AjoutFormationComponent } from './_page/ajout-formation/ajout-formation.component';
import { AjoutStagiaireComponent } from './_page/ajout-stagiaire/ajout-stagiaire.component';
import { ListeFormationComponent } from './_page/liste-formation/liste-formation.component';
import { LoginComponent } from './_page/login/login.component';
import { PrincipaleComponent } from './principale/principale.component';
import { AcceuilComponent } from './_page/acceuil/acceuil.component';
import { FormationComponent } from './_page/formation/formation.component';

const routes: Routes = [
  {
    path: '',
    component :LoginComponent
  },
  {
    path:"user",
    component :PrincipaleComponent,
    children:[
      {
        path:"",
        component: AcceuilComponent
      },
      {
      path: 'liste-formation',
      component: ListeFormationComponent
    },
    {
      path: "formation/:id",
      component: FormationComponent
    },
    {
      path: 'ajout-stagiaire',
      component: AjoutStagiaireComponent
    },
    {
      path: 'ajout-formation',
      component: AjoutFormationComponent
    },
    {
      path: 'ajout-stagiaire',
      component: AjoutStagiaireComponent
    },

    {path: 'logout', component: LoginComponent},

  ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
    ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
