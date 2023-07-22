import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationComponent2 } from '../Navigation2/Navigation2.component';
import { FindinternshipComponent } from '../findinternship/findinternship.component';
import { AppliedInternshipComponent } from '../applied-internship/applied-internship.component';

@Component({
  selector: 'app-welcome-student',
  templateUrl: './welcome-student.component.html',
  styleUrls: ['./welcome-student.component.css']
})
export class WelcomeStudentComponent implements OnInit{

  constructor(private router:Router){

  }
 
  ngOnInit(): void {
    
  }

  onFindInternship(){
    this.router.navigate(['find_internship']);
  }

  onAppliedInternship(){
    this.router.navigate(['applied_internship']);
  }
}
