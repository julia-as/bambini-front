import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

  firstName: String = "Hello";
  lastName: String = "World";
  @ViewChild('f') newChildForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.dir(f);
    // this.firstName = f.form.;

  }
}
