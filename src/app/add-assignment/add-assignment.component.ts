
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

  constructor(private apiService: ApiService, private router: Router) { }

  addAssignment() {
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
