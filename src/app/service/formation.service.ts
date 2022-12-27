import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Formation from '../mudule/Formation';
import Utilisateur from '../mudule/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getFormationsByFactory(idFactory: number): Observable<Formation[]>{
    return this.http.get<Formation[]>("http://localhost:9090/formations/list-formation/"+idFactory);
  }
}
