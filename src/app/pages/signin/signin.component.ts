import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public formSignin: FormGroup
  public account: Account = new Account();


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signinService: SigninService,
  ) {
    this.formSignin = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })
   }

  ngOnInit(): void {

  }
  
  public save() {
    if (this.formSignin.valid) {
      this.account.name = this.formSignin.controls.name.value;
      this.account.email = this.formSignin.controls.email.value;
      this.account.password = this.formSignin.controls.password.value;
      this.registrer()
    }
  }

  registrer() {
    this.signinService.saveUser(this.account).subscribe(res => {})
    
    //should be inside .subscribe()
    this.router.navigate(['/dashboard']);
  }

}
