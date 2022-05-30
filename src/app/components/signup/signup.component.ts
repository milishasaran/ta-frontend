import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'news-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  submitted = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private user: SignupService, private route: Router) {}

  ngOnInit(): void {}

  signup() {
    //console.log(this.form.value)
    this.user.signup(this.form.value).subscribe({
      next: (data: any) => {
        this.submitted = true;
        this.route.navigate(['/login']);
      },
      error: (error) => {
        this.route.navigate(['/signup']);
        //alert('Error');
      },
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
