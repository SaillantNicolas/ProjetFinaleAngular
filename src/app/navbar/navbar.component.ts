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
  showDataGenerationField = false;

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

  handleAdminClick(route: string) {
    if (!this.authService.isAdmin()) {
      alert("Accès refusé : Vous devez être administrateur pour accéder à cette fonctionnalité.");
      return;
    }
    this.router.navigate([route]);
    this.closeSidebar();
  }

  closeSidebar() {
    this.isSidebarOpened = false;
  }

  showDataGenerationFieldToggle() {
    this.showDataGenerationField = !this.showDataGenerationField;
  }
}
