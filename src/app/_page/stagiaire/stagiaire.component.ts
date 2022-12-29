import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent {
  constructor(private route: ActivatedRoute){}
  OnInit(){
    let idStagiaire!:number;
    idStagiaire =Number(this.route.snapshot.params['id']);
    
  }

}
