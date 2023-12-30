import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

const routes: Route[] = [
  {
    path: '',
    component: AssignmentsListComponent,
  },
  {
    path: 'home',
    component: AssignmentsListComponent,
  },
  {
    path: 'assignments',
    component: AssignmentsListComponent,
  },
  {
    path: 'assignment/:id',
    component: AssignmentDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AssignmentsListComponent,
    AssignmentDetailsComponent,
    AddAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
