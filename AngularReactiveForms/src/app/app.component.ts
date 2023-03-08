import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //  registrationForm!: FormGroup;
constructor(private fb:FormBuilder){}

  ngOnInit(): void {}
    registrationForm=this.fb.group({
username:['', [Validators.required, Validators.minLength(5)]],
password:['', [Validators.required, Validators.minLength(5)]],
conpassword:['', Validators.required],
addressForm:this.fb.group({
city:['', Validators.required],
state:['', Validators.required],
postcode:['', Validators.required]
})
})
    // this.registrationForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   password: new FormControl(null, [Validators.required]),
    //   conpassword: new FormControl(null, Validators.required),
    //   addressForm: new FormGroup({
    //     city: new FormControl(null, Validators.required),
    //     state: new FormControl(null, Validators.required),
    //     postcode: new FormControl(null, Validators.required),
    //   }),
    // });

  onLoadApi() {
this.registrationForm.setValue({//patchValue samo jedan deo obrasca
username:"Vladan",
password:"Filter74",
conpassword:'Fulter74',
addressForm:{
city:"Kragujevac",
state:"Serbia",
postcode:'34000'
}
})
  }
onSubmit(){
console.log(this.registrationForm)
}
}
