import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  // registerForm = new FormGroup("");
  registerForm = this.fb.group({
    firstName : ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  // firstName = new FormControl('');
  // lastName = new FormControl('');
  // email = new FormControl('');
  // password = new FormControl('');

  onSubmit(): void {
    console.warn(this.registerForm.value);

  }
}
