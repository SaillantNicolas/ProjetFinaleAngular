import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { Profs } from '../models/profs.model';
import { ApiService } from '../services/api.service';
import { ProfService } from '../services/prof.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-assignments-list',
  templateUrl: './assignments-list.component.html',
  styleUrls: ['./assignments-list.component.css']
})
export class AssignmentsListComponent implements OnInit {
  assignments : Assignment[] = [];
  profname = '';
  profsInfo: {[key: number]: Profs} = {};
  paginatedAssignments: Assignment[] = [];
  totalAssignments = 0;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private apiService: ApiService, private router: Router, private profService: ProfService) { }

  ngOnInit() {
    this.apiService.getAssignments().subscribe(data => {
      this.assignments = data;
      this.totalAssignments = this.assignments.length;
      this.initializePagination();
      this.loadProfForAssignments();
      console.log('Assignments récupérés', data);
    }, error => {
      console.error('Erreur lors de la récupération des assignments', error);
    });
  }

  loadProfForAssignments() {
    this.assignments.forEach(assignment => {
      if (!this.profsInfo[assignment.prof]) {
        this.profService.getProfsById(assignment.prof.toString()).subscribe(data => {
          this.profsInfo[assignment.prof] = data;
        });
      }
    });
  }

  initializePagination() {
    this.paginatedAssignments = this.assignments.slice(0, 5);
  }

  goToAssignmentDetail(id: number) {
    this.router.navigate(['/assignment', id]);
  }

  getProfName(profId: number): string {
    return (this.profsInfo[profId]?.name + " " + this.profsInfo[profId]?.firstname) || 'Non assigné';
  }

  pageEvent(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedAssignments = this.assignments.slice(startIndex, endIndex);
  }
}