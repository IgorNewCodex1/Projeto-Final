import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: any;
  private senha: any;
  private data: [];
  private return: any;

  constructor(public loginService: LoginServiceService) { }

  ngOnInit() {
  }

  enviaForm() {
   this.loginService.sendLogin(this.email, this.senha);
  }

}
