import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderComponent } from './header/header.component';
import Test from './mudule/Test';
import Utilisateur from './mudule/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username!: string;
  public password!: string;
  static utilisateur: Utilisateur;


  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  AppService(username: string, password: string) {
    return this.http.get<Utilisateur>(`http://localhost:9090/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res ) => {
        this.username = username;
        this.password = password;
        localStorage.setItem('user', JSON.stringify(res))
        //AppService.utilisateur=res;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(
    username: string , password: String) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = "";
    this.password = "";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

}
