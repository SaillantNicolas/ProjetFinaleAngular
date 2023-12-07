import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]>  {
    return this.http.get<Assignment[]>('http://localhost:8010/api/assignments');
  }

}
