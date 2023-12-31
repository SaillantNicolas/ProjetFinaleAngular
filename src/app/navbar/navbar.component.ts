// navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpened = false;

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
}
