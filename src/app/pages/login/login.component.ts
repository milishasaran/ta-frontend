import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'news-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  info: BehaviorSubject<any> = new BehaviorSubject(null);

  submitted = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private user: LoginService, private route: Router) {}

  ngOnInit(): void {}

  login() {
    this.user.login(this.form.value).subscribe({
      next: (data: any) => {
        const { user } = data;
        const { email, id } = user;
        window.sessionStorage.setItem('access-token', data.accessToken);
        this.info.next({ email, id });
        this.route.navigateByUrl('/home');
      },
      error: (error) => {
        window.sessionStorage.removeItem('access-token');
        this.info.next(null);
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
