import { Component, OnInit, forwardRef } from '@angular/core';
import { InterService } from '../internship.service';
import { Interns } from '../intern';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
  providers: [ InterService ]
})
export class StudentRegistrationComponent implements OnInit {

  registration: string = "Student Registration";
  intern: Interns = new Interns();

  constructor(private service: InterService) { }

  ngOnInit(): void { }

  private registerIntern() {
    this.service.registerInterns(this.intern)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.error(error);
      })

  }

  onFormSubmitt() {
    console.log(this.intern);
    this.registerIntern();
    // window.alert("Successfully Registered....");
  }

  // onStudentRegister(){
  //   console.log("Registered Successfully.");
  // }

}
