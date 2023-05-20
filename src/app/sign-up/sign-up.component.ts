import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from '../models/signup';


@Component({
selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

registerForm!: FormGroup;
model: SignUp = new SignUp("", "", "", "");

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
this.registerForm = this.fb.group({
firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
email: ['', [Validators.required, Validators.email]],
password: ['', Validators.required]
});
}

get firstName() {
return this.registerForm.get('firstName');
}

get lastName() {
return this.registerForm.get('lastName');
}

get email() {
return this.registerForm.get('email');
}

onSubmit(): void {
if (this.registerForm.invalid) {
return;
}
console.warn(this.registerForm.value);
}
}