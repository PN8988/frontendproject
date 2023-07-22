import { RouterModule } from "@angular/router";
import { StudentLoginComponent } from "./student-login/student-login.component";
import { RecruiterLoginComponent } from "./recruiter-login/recruiter-login.component";
import { InternshipHomeComp } from "./Internship_Project/Home/home.component";
import { FindinternshipComponent } from "./Internship_Project/findinternship/findinternship.component";
import { WelcomeStudentComponent } from "./Internship_Project/welcome-student/welcome-student.component";
import { AppliedInternshipComponent } from "./Internship_Project/applied-internship/applied-internship.component";
import { WelcomeCompanyComponent } from "./Internship_Project/welcome-company/welcome-company.component";
import { PostInternshipComponent } from "./Internship_Project/post-internship/post-internship.component";
import { ApplicationStatusComponent } from "./Internship_Project/application-status/application-status.component";
import { StudentRegistrationComponent } from "./Internship_Project/student-registration/student-registration.component";

export const routing = RouterModule.forRoot([

  /* Navigation1 for container */
  {path: 'homecomp',component:InternshipHomeComp},
  {path: 'Studentlogin',component:StudentLoginComponent},
  {path: 'Recruiterlogin',component:RecruiterLoginComponent},
  {path: 'student_registration',component:StudentRegistrationComponent},

  {path: 'studenthome',component:WelcomeStudentComponent},
  {path: 'find_internship',component:FindinternshipComponent},
  {path: 'applied_internship',component:AppliedInternshipComponent},

  {path: 'welcome_company',component:WelcomeCompanyComponent},
  {path: 'welcome_company',component:WelcomeCompanyComponent},
  {path: 'post_internship',component:PostInternshipComponent},
  {path:'application_status',component:ApplicationStatusComponent},


  {path: '',redirectTo:'homecomp',pathMatch:'full'}


   // Navigation2 for container2
  // {path: 'studenthome',component:WelcomeStudentComponent},
  // {path: 'find_internship',component:FindinternshipComponent},
  // {path: 'applied_internship',component:RecruiterLoginComponent},
  // {path: 'logout',component:StudentRegistrationComponent},
  // {path: '',redirectTo:'studenthome',pathMatch:'full'}, 

  //Navigation3

 

]) ;