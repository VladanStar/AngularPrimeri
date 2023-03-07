import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactivne-forme';
signupForm!:FormGroup;

genders=['male', 'female'];
forbiddenUsernames=['Michael', "Anna"];

// constructor(private formBuilder:FormBuilder){}

ngOnInit(): void {
this.signupForm=new FormGroup({
'userData':new FormControl({
  'username':new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
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
const control =new FormControl(null, Validators.required);
(<FormArray>this.signupForm.get('hobbies')).push(control)
}

getControls() {
  return (<FormArray>this.signupForm.get('hobbies')).controls;
}

forbiddenNames(control :FormControl):any{
if(this.forbiddenUsernames.indexOf(control.value)){
return {'name is forbideen':true}

}
return null;

}

}


