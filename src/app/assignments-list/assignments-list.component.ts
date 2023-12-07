import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Assignment } from '../models/assignment.model';

@Component({
  selector: 'app-assignments-list',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.css']
})
export class AssignmentsListComponent {
  assignments : Assignment[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAssignments().subscribe(data => {
      this.assignments = data;
      console.log('Assignments récupérés', data);
    }, error => {
      console.error('Erreur lors de la récupération des assignments', error);
    });
  }
}