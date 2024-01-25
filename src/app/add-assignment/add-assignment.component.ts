import { GenerateAssignmentsComponent } from './../generate-assignments/generate-assignments.component';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { Profs } from '../models/profs.model';
import { ApiService } from '../services/api.service';
import { ProfService } from '../services/prof.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  profs : Profs[] = [];
  defaultprof = 0;
  lastId: number = 0;
  nom = '';
  matiere = '';
  prof = 0;
  daterendu = new Date();
  newAssignment: Assignment = {
    _id: '',
    rendu: false,
    id: 0,
    daterendu: new Date(),
    matiere: '',
    nom: '',
    note: 0,
    prof: 0
  };

  isFormSubmitted = false;

  ngOnInit(): void {
    this.profService.getProfs().subscribe(data => {
      this.profs = data;
      if(this.profs.length > 0){
        this.defaultprof = this.profs[0].id;
        this.prof = this.defaultprof;
      }
      console.log('Professeurs récupérés', data);
    }, error => {
      console.error('Erreur lors de la récupération des professeurs', error);
    });
  }
  constructor(private apiService: ApiService, private router: Router, private profService: ProfService) {
    this.apiService.getAssignments().subscribe(data => {
      data.forEach(element => {
        if (element.id > this.lastId) {
          this.lastId = element.id;
        }
      });
    });
  }

  addAssignment(assignmentForm: NgForm) {
    this.isFormSubmitted = true;

  if (assignmentForm.invalid) {
    // Ne pas soumettre le formulaire si des champs sont invalides
    return;
  }
    this.newAssignment.id = this.lastId + 1;
    this.newAssignment.nom = this.nom;
    this.newAssignment.matiere = this.matiere;
    this.newAssignment.prof = Number(this.prof);
    console.log('Nouvel assignment', this.newAssignment)
    this.apiService.getAssignments();
    this.router.navigate(['/home']);
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