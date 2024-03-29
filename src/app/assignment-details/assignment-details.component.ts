import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { Profs } from '../models/profs.model';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { ProfService } from '../services/prof.service';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  profsInfo: {[key: number]: Profs} = {};
  profsImage: {[key: number]: string} = {};
  assignment: Assignment | undefined;
  isAdmin = false;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private profService: ProfService, private authService:AuthService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getAssignmentById(id).subscribe(data => {
        this.assignment = data;
        this.loadProfForAssignment(data.prof);
        console.log('Assignment récupéré', data);
      }, error => {
        console.error('Erreur lors de la récupération de l\'assignment', error);
      });
    }
    this.isAdmin = this.authService.isAdmin();
    console.log(this.isAdmin);
  }

  loadProfForAssignment(id: number) {
    this.profService.getProfsById(id.toString()).subscribe(data => {
      this.profsInfo[id] = data;
      this.profsImage[id] = data.image;
    }
    , error => {
      console.error('Erreur lors de la récupération du professeur', error);
    });
  }
  getProfName(profId: number): string {
    return (this.profsInfo[profId]?.name + " " + this.profsInfo[profId]?.firstname) || 'Non assigné';
  }

  getProfImage(profId: number): string {
    return this.profsImage[profId] || '';
  }
  Edit() {
    if (this.assignment) {
      this.router.navigate(['/edit', this.assignment.id]);
    }
  }

  Back() {
    this.router.navigate(['/home']);
  }

  AssignmentDelete(id: string) {

    console.log(id);
   

    this.apiService.deleteAssignment(id).subscribe(data => {
      this.apiService.getAssignments();
    this.router.navigate(['/home']);
      console.log('Assignment supprimé', data);
    }, error => {
      console.error('Erreur lors de la suppression de l\'assignment', error);
    });
    
    
  }
}
