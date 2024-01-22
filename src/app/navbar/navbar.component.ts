import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpened = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  public isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  closeSidebar() {
    this.isSidebarOpened = false;
  }
}
