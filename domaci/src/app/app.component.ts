import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm!: NgForm;
  email: string = '';
  plan: string = 'Advanced';
  password: string = '';

  onSubmit(form:any) {
    console.log(form.value);
    // ili
    // this.submitted = true;
    // this.formData = form.value;
  }
}
