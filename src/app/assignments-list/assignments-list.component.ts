import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { ApiService } from '../services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-assignments-list',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.css']
})
export class AssignmentsListComponent implements OnInit {
  assignments : Assignment[] = [];
  paginatedAssignments: Assignment[] = [];
  totalAssignments = 0;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getAssignments().subscribe(data => {
      this.assignments = data;
      this.totalAssignments = this.assignments.length;
      this.initializePagination();
      console.log('Assignments récupérés', data);
    }, error => {
      console.error('Erreur lors de la récupération des assignments', error);
    });
  }

  initializePagination() {
    this.paginatedAssignments = this.assignments.slice(0, 5);
  }

  goToAssignmentDetail(id: number) {
    this.router.navigate(['/assignment', id]);
  }

  pageEvent(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedAssignments = this.assignments.slice(startIndex, endIndex);
  }
}