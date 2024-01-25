import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8010/api/accounts';
  loggedIn = false;
  constructor(private http: HttpClient) {}

  // Méthode pour se connecter
  login(user: string, password: string): Observable<Login[]> {
    this.loggedIn = true;
    return this.http.get<Login[]>(`${this.apiUrl}?user=${user}&password=${password}`);
  }

  // Méthode pour vérifier le statut de connexion
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user != null;
  }

  // Méthode pour vérifier le statut d'administrateur
  isAdmin(): boolean {
    if(this.isLoggedIn()){
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      return user != null && user.admin;   
    }
    else{
      return false;
    }

  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('user');
  }
}
