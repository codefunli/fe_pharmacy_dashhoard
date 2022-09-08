import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  username: string = "linhhd";
  password: string = "";
  invalidLogin: boolean = false;

  constructor(private fb: FormBuilder,
    private authService : AuthenticationService,
    private pharmaciesService: PharmaciesService,
    private router: Router,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  checkLogin(form: any) {
    if(this.authService.authentiacte(this.form.controls['username'].value, this.form.controls['password'].value)) {
      this.router.navigate([''])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  saveDetails(form: any) {
    // if (this.form.email.value == 'abc123')
    this.router.navigate(['/dashboard']);
  }
}