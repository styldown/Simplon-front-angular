import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stagiaire from '../mudule/Stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private http: HttpClient) { }

  getStagiaireByFormation(idFormation: Number): Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>("http://localhost:9090/stagiaires/liststagiaire/"+idFormation);
  }
  // getStagiaireById(idStagiaire: Number): Observable<Stagiaire>{
  //   return ;
  // }
}
