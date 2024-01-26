import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AppComponent } from './app.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfListComponent } from './prof-list/prof-list.component';
import { authGuard } from './services/auth.guard';
import { GenerateAssignmentsComponent } from './generate-assignments/generate-assignments.component';


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
    canActivate :[authGuard]
  },
  {
    path: 'edit/:id',
    component: EditAssignmentComponent, 
    canActivate :[authGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'profs',
    component: ProfListComponent,
  },
  {
    path: 'generate',
    component: GenerateAssignmentsComponent,
    canActivate :[authGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AssignmentsListComponent,
    AssignmentDetailsComponent,
    AddAssignmentComponent,
    LoginFormComponent,
    EditAssignmentComponent,
    ProfListComponent,
    GenerateAssignmentsComponent,
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
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
