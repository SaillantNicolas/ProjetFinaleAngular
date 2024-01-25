import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-generate-assignments',
  templateUrl: './generate-assignments.component.html',
  styleUrls: ['./generate-assignments.component.css']
})
export class GenerateAssignmentsComponent {

  numberOfAssignments: number = 0;

  constructor(private assi: ApiService, private router: Router ) { 

  }

  generateAssignments() {
    this.assi.generateRandom(this.numberOfAssignments);
    this.assi.getAssignments();
    this.router.navigate(['/home']);
  }
}
