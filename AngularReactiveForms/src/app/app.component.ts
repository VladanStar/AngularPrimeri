import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
=======
import { FormBuilder, Validators } from '@angular/forms';
// import { forbiddenNameValidators } from './shared/user-name.validator';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
>>>>>>> 611847d8bd914c4639add4d99b1d4e63c63d56f9

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
<<<<<<< HEAD

  constructor(private fb: FormBuilder) { }
  registrationForm!: FormGroup;
=======
  //  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
>>>>>>> 611847d8bd914c4639add4d99b1d4e63c63d56f9

  ngOnInit(): void {}
  registrationForm = this.fb.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          ForbiddenNameValidator(/admin/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      conpassword: ['', Validators.required],
      addressForm: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        postcode: ['', Validators.required],
      }),
    },
    { validator: PasswordValidator }
  );

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
    this.registrationForm.setValue({
      //patchValue samo jedan deo obrasca
      username: 'Vladan',
      password: 'Filter74',
      conpassword: 'Fulter74',
      addressForm: {
        city: 'Kragujevac',
        state: 'Serbia',
        postcode: '34000',
      },
    });
  }
  onSubmit() {
    console.log(this.registrationForm);

  }
  get userName() {
    return this.registrationForm.get('username');
  }
}
