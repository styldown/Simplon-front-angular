import { StagiaireService } from './../../service/stagiaire.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Stagiaire from 'src/app/mudule/Stagiaire';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {
  id!: Number;
  listStagiaire!: Stagiaire[];
  constructor(private http:HttpClient, private route: ActivatedRoute, private service: StagiaireService) {}
  ngOnInit() {
    this.id =Number(this.route.snapshot.params['id']);
    this.service.getStagiaireByFormation(this.id).subscribe({
      next:(resultat)=>{
        this.listStagiaire=resultat;
      },
      error:() => {
        console.log("echec requet");
      }
    })
    console.log(this.listStagiaire);

}
}
