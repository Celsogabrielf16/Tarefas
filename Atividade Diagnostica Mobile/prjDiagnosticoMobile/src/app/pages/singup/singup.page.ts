import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(
      ["/"], {skipLocationChange: false}
    )
  }

  login() {
    this.router.navigate(
      ["/login"], {skipLocationChange: true}
    )
  }

}
