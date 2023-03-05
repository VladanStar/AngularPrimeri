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
submitted:boolean=false;
answer="";
user={
username:"",
email:'',
secretQuestion:'',
answer:'',
gender:''
}

genders=[
'male','female'
]
  sugestedUserName() {
    let sugestedName: string = 'Superrior';
  }
  // onSubmit(form:NgForm){
  // // console.log("Submited");
  // console.log(form);
  // }
  onSubmit() {
this.submitted=true;
    console.log(this.signupForm);
this.user.username=this.signupForm.value.userData.username;
this.user.email=this.signupForm.value.userData.email;
this.user.secretQuestion=this.signupForm.value.secret;
this.user.answer=this.signupForm.value.questinAnswer;
this.user.gender=this.signupForm.value.gender;
  }
}
