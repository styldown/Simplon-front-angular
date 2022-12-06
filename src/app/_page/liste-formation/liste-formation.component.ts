import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.scss']
})
export class ListeFormationComponent {
  response={};
  constructor(private http: HttpClient) {
    http.get('http://localhost:9090/users').subscribe(data => this.response = data);
  }
}
