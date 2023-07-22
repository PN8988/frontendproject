import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-company',
  templateUrl: './welcome-company.component.html',
  styleUrls: ['./welcome-company.component.css']
})
export class WelcomeCompanyComponent implements OnInit{

  constructor(private router:Router){

  }
 
  ngOnInit(): void {
    
  }

  onPostInternship(){
    this.router.navigate(['post_internship']);
  }

  onApplicationStatus(){
    this.router.navigate(['application_status']);
  }

}
