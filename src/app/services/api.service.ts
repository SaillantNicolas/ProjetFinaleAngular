import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from './../models/assignment.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8010/api/assignments';
  lastId= 234;

  constructor(private http: HttpClient) {}

  addAssignment(newAssignment: Assignment): Observable<any> {
    // Assuming you have an API endpoint for adding assignments
    return this.http.post<any>(this.baseUrl, newAssignment);
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.baseUrl);
  }

  getAssignmentById(id: string): Observable<Assignment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Assignment>(url);
  }

  updateAssignment(_id: string, assignment: Assignment): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.put<Assignment>(url, assignment);
  }
  
  deleteAssignment(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }


  randomName = [
    "TP1", "TP2", "TP3", "TP4", "TP5", "TP6", "TP7", "TP8", "TP9", "TP10",
    "Projet 1", "Projet 2", "Projet 3", "Projet 4", "Projet 5", "Projet 6", "Projet 7", "Projet 8", "Projet 9", "Projet 10",
    "QCM 1", "QCM 2", "QCM 3", "QCM 4", "QCM 5", "QCM 6", "QCM 7", "QCM 8", "QCM 9", "QCM 10"
  ];
  matieres = ['Mathématiques', 'Histoire', 'Physique'];
  generateRandomAssignment() {
    const startDate = new Date('2023-09-01'); 
    const endDate = new Date('2024-06-30');
    const timeDifference = endDate.getTime() - startDate.getTime();
    const randomTimeDifference = Math.random() * timeDifference;
    const randomDate = new Date(startDate.getTime() + randomTimeDifference); 
  
    const nom = this.randomName [Math.floor(Math.random()* this.randomName.length)];
  
    

    const randomProf = Math.floor(Math.random() * 3) + 1;
    let randomMatiere= '';
    if (randomProf === 1){
      randomMatiere = 'Maths';
    }
    else if (randomProf === 2){
      randomMatiere = 'Angular';
    }
    else {
      randomMatiere = 'SGBD';
    }

    

    const newAssignment: Assignment = {
      _id: '',
      rendu: false,
      id: this.lastId + 1,
      daterendu: randomDate,
      matiere: randomMatiere,
      nom: nom,
      note: 0,
      prof: randomProf
    };

    this.addAssignment(newAssignment).subscribe(
      data => {
        console.log('Assignment aléatoire ajouté', data);
        this.lastId++;
        // Vous pouvez aussi mettre à jour votre UI ici si nécessaire
      },
      error => {
        console.error('Erreur lors de l ajout de l assignment aléatoire', error);
      }
    );
  }

  generateRandom(n : number)
  {
    for (let i =0;i<n;i++)
    {
      this.generateRandomAssignment();
    }
  }
}