import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm!: FormGroup;

ngOnInit(): void {
this.projectForm = new FormGroup({
'projectName':new FormControl(null, Validators.required),
'email': new FormControl(null, [Validators.required, Validators.email]),
'projectStatus':new FormControl('critical')
});
}

}
