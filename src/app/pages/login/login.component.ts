import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credencial } from 'src/app/models/credencial';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public credencial: Credencial = new Credencial();
  public logged: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })
   }

  ngOnInit(): void {
  }

  public save() {
    if (this.formLogin.valid) {
      this.credencial.email = this.formLogin.controls.email.value;
      this.credencial.password = this.formLogin.controls.password.value;
      this.doLogin()
    }
  }

   doLogin() {
    this.loginService.login(this.credencial).subscribe(res => {})
    this.router.navigate(['/dashboard']);
    
   }
}
