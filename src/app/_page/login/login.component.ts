import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import Test from 'src/app/mudule/Test';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string="";
  password : string="";
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  retour!:any;

  constructor(
    private router: Router,
    private authenticationService: AppService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.AppService(this.username, this.password).subscribe({next:(resultat)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/user']);
    }, error:() => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }});
  }
}
function Ouput() {
  throw new Error('Function not implemented.');
}

