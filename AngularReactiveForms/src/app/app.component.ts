import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


 registrationForm!:FormGroup;

ngOnInit(): void {
this.registrationForm=new FormGroup( {
  'username':new FormControl(null, Validators.required),
'email':new FormControl(null, [Validators.required, Validators.email]),
'conpassword':new FormControl(null, Validators.required),
   })
}

}
