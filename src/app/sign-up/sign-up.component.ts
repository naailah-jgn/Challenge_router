import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { SignUp } from '../models/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
model: SignUp = new SignUp("", "", "", "");
isSubmitted: boolean = false;

constructor(){
}
  onSubmit(): void {
    this.isSubmitted = true;
    console.log(this.isSubmitted);
    
    console.log(this.model);
  }
}
