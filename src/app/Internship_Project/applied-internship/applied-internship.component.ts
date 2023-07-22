import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-applied-internship',
  templateUrl: './applied-internship.component.html',
  styleUrls: ['./applied-internship.component.css']
})
export class AppliedInternshipComponent {

  search = faMagnifyingGlass;

}
