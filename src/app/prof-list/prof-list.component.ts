import { Component, ViewChild } from '@angular/core';
import { Profs } from '../models/profs.model';
import { ProfService } from '../services/prof.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.component.html',
  styleUrls: ['./prof-list.component.css']
})
export class ProfListComponent {

  profs : Profs[] = [];
  paginatedProfs: Profs[] = [];
  totalProfs = 0;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private profService: ProfService ) { }

  ngOnInit() {
    this.profService.getProfs().subscribe(data => {
      this.profs = data;
      this.totalProfs = this.profs.length;
      this.initializePagination();
      console.log('Professeurs récupérés', data);
    }, error => {
      console.error('Erreur lors de la récupération des professeurs', error);
    });
  }
  initializePagination() {
    this.paginatedProfs = this.profs.slice(0, 5);
  }

  pageEvent(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedProfs = this.profs.slice(startIndex, endIndex);
  }
}
