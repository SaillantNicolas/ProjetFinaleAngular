import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AppComponent } from './app.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';
import { NavbarComponent } from './navbar/navbar.component';


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
  {
    path: 'add',
    component: AddAssignmentComponent,
  },
  {
    path: 'edit/:id',
    component: AddAssignmentComponent,
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
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
