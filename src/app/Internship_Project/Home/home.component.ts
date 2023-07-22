import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faLocationArrow, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";


@Component({
    selector:'intern-home',
    templateUrl:'./home2.component.html',
    styleUrls: ['./home2.component.css']
})
export class InternshipHomeComp implements OnInit{

    location = faLocationArrow;
    phone = faPhone;
    gmail = faMailBulk

   constructor(private router:Router){

   }


    ngOnInit():void{

    }
 
   

}