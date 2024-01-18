import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profs } from '../models/profs.model';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  baseUrl = 'http://localhost:8010/api/profs';
  constructor(private http: HttpClient) { }

  getProfs(): Observable<Profs[]> {
    return this.http.get<Profs[]>(this.baseUrl);
  }

  getProfsById(id: string): Observable<Profs> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Profs>(url);
  }
}
