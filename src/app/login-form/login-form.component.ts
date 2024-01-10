import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

  // Méthode pour traiter la soumission du formulaire
  onSubmit(): void {
    this.authService.login(this.user, this.password).subscribe((accounts) => {
      const account = accounts.find(acc => acc.user === this.user && acc.password === this.password);
      if (account) {
        localStorage.setItem('user', JSON.stringify(account));
        console.log(account);
        if (account.admin === true) {
          console.log('Connexion réussie en tant qu\'administrateur!');
          this.router.navigate(['/home']);
        }
        else{
          console.log('Connexion réussie!');
          this.router.navigate(['/home']);
        }
        } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    });
  }
}
