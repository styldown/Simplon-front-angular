import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AjoutFormationComponent } from './_page/ajout-formation/ajout-formation.component';
import { AjoutStagiaireComponent } from './_page/ajout-stagiaire/ajout-stagiaire.component';
import { ListeFormationComponent } from './_page/liste-formation/liste-formation.component';
import { LoginComponent } from './_page/login/login.component';

const routes: Routes = [
  {
    path: 'liste-formation',
    component: ListeFormationComponent
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
  {
    path: '',
    component :LoginComponent
  },
  {path: 'logout', component: LoginComponent},

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
