import { Component } from '@angular/core';

@Component({
  selector: 'app-post-internship',
  templateUrl: './post-internship.component.html',
  styleUrls: ['./post-internship.component.css']
})
export class PostInternshipComponent {

  postIntern:string="Post New Internship";

  onPost(){
    window.alert("Successfully Registered.");
  }

}
