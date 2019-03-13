import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: null,
    password: null
  };
  registerData = {
    username: null,
    password: null,
    email: null
  };
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  login(val) {
    if (val !== 1) { return false; }
    this.http.post('/api/admin/login',
      this.loginData).subscribe(
        res => {
          if (res['success']) {
            this.router.navigate(['/main/list']);
          }
        });
  }
  register(val) {
    console.log('why');
    if (val !== 2) { return false; }

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('/api/admin/register',
      this.registerData, { headers }).subscribe(
        res => {
          if (res['success']) {
            this.router.navigate(['/main/list']);
          }
        });
  }

}
