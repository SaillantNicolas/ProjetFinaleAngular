import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8010/api/assignments';
  constructor(private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]>  {
    return this.http.get<Assignment[]>('http://localhost:8010/api/assignments');
  }

  getAssignmentById(id: string): Observable<Assignment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Assignment>(url);
  }
}
