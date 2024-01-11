
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  lastId: number = 0;
  nom = '';
  matiere = '';
  prof = '';
  daterendu = new Date();
  newAssignment: Assignment = {
    _id: '',
    rendu: false,
    id: 0,
    daterendu: new Date(),
    matiere: '',
    nom: '',
    note: 0,
    prof: ''
  };

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getAssignments().subscribe(data => {
      data.forEach(element => {
        if (element.id > this.lastId) {
          this.lastId = element.id;
        }
      });
    });
  }

  addAssignment() {
    this.newAssignment.id = this.lastId + 1;
    this.newAssignment.nom = this.nom;
    this.newAssignment.matiere = this.matiere;
    this.newAssignment.prof = this.prof;
    console.log('Nouvel assignment', this.newAssignment)
    this.apiService.addAssignment(this.newAssignment).subscribe(
      data => {
        console.log('Assignment ajouté', data);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'assignment', error);
      }
    );
  }
}
