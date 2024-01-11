import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent {
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
  constructor(private route: ActivatedRoute ,private apiService: ApiService, private router: Router) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null){
      this.apiService.getAssignmentById(id).subscribe(data => {
        this.newAssignment = data;
        this.newAssignment._id = data._id;
        this.newAssignment.daterendu = new Date(data.daterendu);
        console.log('Assignment récupéré', data);
      }, error => {
        console.error('Erreur lors de la récupération de l\'assignment', error);
      });
    }
  }

  updateAssignment() {
    this.apiService.updateAssignment(this.newAssignment._id, this.newAssignment).subscribe(data => {
      console.log('Assignment modifié', data);
    }
    , error => {
      console.error('Erreur lors de la modification de l\'assignment', error);
    });
    this.router.navigate(['/assignment', this.newAssignment.id]);
  }
}
