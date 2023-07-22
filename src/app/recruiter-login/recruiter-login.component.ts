import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent implements OnInit{

  constructor(private router:Router){

  }
 
  ngOnInit(): void {
    
  }

  onRecruiterLogin(){
    this.router.navigate(['welcome_company']);
  }

}
