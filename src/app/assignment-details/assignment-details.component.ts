import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Assignment } from '../models/assignment.model';
@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  assignment: Assignment | undefined;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
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
  Back() {
    window.history.back();
  }

  AssignmentDelete(id: string) {
    console.log(id)
    this.apiService.deleteAssignment(id).subscribe(data => {
      console.log('Assignment supprimé', data);
    }, error => {
      console.error('Erreur lors de la suppression de l\'assignment', error);
    });
    window.history.back();
  }
}
