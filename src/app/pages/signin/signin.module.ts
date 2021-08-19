import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SigninRoutingModule } from './signin-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SigninService } from 'src/app/services/signin.service';



@NgModule({
  declarations: [
    SigninComponent
],
  imports: [
    CommonModule,
    SigninRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    SigninService,
  ]
})
export class SigninModule { }
