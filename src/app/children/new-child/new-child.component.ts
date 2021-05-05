import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Child } from '../child.model';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

  @ViewChild('f') newChildForm: NgForm;
  genders = ['female', 'male'];
  child: Child;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.child = new Child(form.value.childData.lastName,
      form.value.childData.firstName,
      form.value.childData.dob, "imagePath");
      console.log("new child:" + this.child.toString());
  }
}
