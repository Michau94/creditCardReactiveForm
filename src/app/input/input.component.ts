import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() mask: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.control);
  }

  showErrors() {
    const { touched, errors } = this.control;
    return touched && errors;
  }
}
