import { AppService } from './../../app.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Formation from 'src/app/mudule/Formation';
import { FormationService } from 'src/app/service/formation.service';
import Utilisateur from 'src/app/mudule/Utilisateur';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.scss']
})
export class ListeFormationComponent {
  response={};
  formations!: Formation[];
  idFactory!: number;
  constructor(private form: FormationService, private http: HttpClient) {}
  ngOnInit(){
    const user = JSON.parse(localStorage.getItem('user')!);
    this.idFactory= user.factory.id
    console.log(this.idFactory);
    this.form.getFormationsByFactory(this.idFactory).subscribe({next:(resultat)=>{
      this.formations=resultat;
    }, error:() => {
      console.log("echec requet");
    }})

  }
}
