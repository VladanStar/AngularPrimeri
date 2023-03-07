import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactivne-forme';
signupForm!:FormGroup;

genders=['male', 'female'];

ngOnInit(): void {
this.signupForm=new FormGroup({
'userData':new FormControl({
  'username':new FormControl(null, Validators.required),
  'email':new FormControl(null, [Validators.required, Validators.email]),
}),

'gender':new FormControl('male'),
'hobbies':new FormArray([]),

});
}
onSubmit(){
console.log(this.signupForm)
}

onAddHobby(){
this.signupForm.get('hobbies')
}
}


