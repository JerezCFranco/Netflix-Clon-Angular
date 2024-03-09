declare var google: any;
import { Component, NgZone, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // constructor(private titleService: Title,private router: Router, private ngZone: NgZone) {}
  // ngOnInit(): void {
  //   google.accounts.id.initialize({
  //     client_id: '327342934858-2ajuianm15le3o7j7n0gsa6v40ub4tmr.apps.googleusercontent.com',
  //     callback: (resp: any) => this.handleLogin(resp)
  //   });
  //   google.accounts.id.renderButton(document.getElementById('google-btn'), {
  //     type: 'standard',
  //     theme: 'filled_blue',
  //     size: 'medium',
  //     text: "signin_with",
  //     shape: 'rectangle',
  //   });
  //   this.titleService.setTitle('Buscador Películas y Series')
  // }

  // private decodeToken(token: string) {
  //   return JSON.parse(atob(token.split(".")[1]));
  // }

  // async handleLogin(response: any) {
  //   if (response) {
  //     const payLoad = this.decodeToken(response.credential);
  //     sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
  //     this.ngZone.run(() => {
  //       this.router.navigate(['browser']);
  //     });
  //   }
  // }
}
