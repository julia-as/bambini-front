import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Child } from '../child.model';
import { ChildService } from '../../shared/child.service';


@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

  @ViewChild('f') newChildForm: NgForm;
  genders = ['female', 'male'];
  child: Child;

  constructor(private childService: ChildService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.child = new Child(
      this.generateNewId(),
      form.value.childData.lastName,
      form.value.childData.firstName,
      form.value.childData.dob, "imagePath");
    this.childService.addChild(this.child);
    console.log("new child:" + this.child.toString());
  }

  closeNewChildView() {
    //TODO: Router to group child-list
  }

  generateNewId() {
    let min = Math.ceil(10);
    let max = Math.floor(99);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
