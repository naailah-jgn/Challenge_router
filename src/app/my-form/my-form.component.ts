import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { Order } from '../models/order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  model: Order = new Order("", 0, new Date(), "");
  constructor() { }

  

  updateInputValue(){
   
  }
  
  onSubmit(): void {
    console.log(this.model);
  }
}
