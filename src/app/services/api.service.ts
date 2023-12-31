import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from './../models/assignment.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addAssignment(Assignment: Assignment): Observable<any> {
    this.assignments.push(Assignment);
    return of ('assignement ajouté');
  }
  baseUrl = 'http://localhost:8010/api/assignments';
  constructor(private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]>  {
    return this.http.get<Assignment[]>('http://localhost:8010/api/assignments');
  }

  getAssignmentById(id: string): Observable<Assignment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Assignment>(url);
  }

  deleteAssignment(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    console.log(url);
    return this.http.delete(url);
  }
}
