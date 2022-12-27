import { LoginComponent } from './../_page/login/login.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from '../app.service';
import Test from '../mudule/Test';
import Utilisateur from '../mudule/Utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  utilisateur!: Utilisateur;
  constructor() {

    }

  ngOnInit() {
    this.utilisateur= JSON.parse(localStorage.getItem('user')!);
  };
}


