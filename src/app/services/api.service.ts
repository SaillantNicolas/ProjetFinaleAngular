import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from './../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8010/api/assignments';

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

  updateAssignment(id: string, assignment: Assignment): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.put<Assignment>(url, assignment);
  }
  
  deleteAssignment(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
