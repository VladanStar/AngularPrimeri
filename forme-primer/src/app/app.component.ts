import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('f') signupForm!: NgForm;
  defaultQuestion:any='pet';
answer=""
  sugestedUserName() {
    let sugestedName: string = 'Superrior';
  }
  // onSubmit(form:NgForm){
  // // console.log("Submited");
  // console.log(form);
  // }
  onSubmit() {
    console.log(this.signupForm);
  }
}
