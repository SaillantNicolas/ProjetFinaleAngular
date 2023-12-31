import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  
  nomDevoir:string = "";
  dateDeRendu!:Date;
  ajoutActive: boolean = true;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("onSubmit");
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    newAssignment.note = 0;
    newAssignment.id = 0;
    newAssignment.matiere = "";
    newAssignment.prof = "";
    this.apiService.addAssignment(newAssignment).subscribe(message => {
      console.log(message);
      this.router.navigate(['/home']);
    });

  }
}
