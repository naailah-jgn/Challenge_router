import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from '../models/order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
quantity: any;
contact: any;
  constructor() { }
  head = 'my-form';
  title = new FormControl('Amina');

  updateInputValue(){
    this.title.setValue('Naailah');
  }
  
  onSubmit(): void {
    console.log(this.model);
  }
  model: Order = new Order("", 0, new Date(), "");
}
