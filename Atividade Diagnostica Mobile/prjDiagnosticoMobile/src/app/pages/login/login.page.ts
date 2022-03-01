import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  singup() {
    this.router.navigate(
      ["/singup"], {skipLocationChange: false}
    )
  }

}
