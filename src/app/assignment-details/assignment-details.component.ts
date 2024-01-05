import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  assignment: Assignment | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getAssignmentById(id).subscribe(data => {
        this.assignment = data;
        console.log('Assignment récupéré', data);
      }, error => {
        console.error('Erreur lors de la récupération de l\'assignment', error);
      });
    }
  }

  Edit() {
    if (this.assignment) {
      this.router.navigate(['/edit-assignment', this.assignment._id]);
    }
  }

  Back() {
    window.history.back();
  }

  AssignmentDelete(id: string) {
    console.log(id);
    this.apiService.deleteAssignment(id).subscribe(data => {
      console.log('Assignment supprimé', data);
    }, error => {
      console.error('Erreur lors de la suppression de l\'assignment', error);
    });
    window.history.back();
  }
}
