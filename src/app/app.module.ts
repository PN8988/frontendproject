import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InternshipHomeComp } from './Internship_Project/Home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { ContainerComponent } from './Internship_Project/container/container.component';
import { NavigationComponent } from './Internship_Project/navigation/navigation.component';
import { StudentRegistrationComponent } from './Internship_Project/student-registration/student-registration.component';
import { WelcomeStudentComponent } from './Internship_Project/welcome-student/welcome-student.component';
import { NavigationComponent2 } from './Internship_Project/Navigation2/Navigation2.component';

import { FindinternshipComponent } from './Internship_Project/findinternship/findinternship.component';
import { AppliedInternshipComponent } from './Internship_Project/applied-internship/applied-internship.component';
import { WelcomeCompanyComponent } from './Internship_Project/welcome-company/welcome-company.component';
import { ApplicationStatusComponent } from './Internship_Project/application-status/application-status.component';
import { PostInternshipComponent } from './Internship_Project/post-internship/post-internship.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InternshipHomeComp,
    StudentLoginComponent,
    RecruiterLoginComponent,
    ContainerComponent,
    NavigationComponent,
    StudentRegistrationComponent,
    WelcomeStudentComponent,

    NavigationComponent2,
    FindinternshipComponent,
    AppliedInternshipComponent,
    WelcomeCompanyComponent,
    ApplicationStatusComponent,
    PostInternshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
