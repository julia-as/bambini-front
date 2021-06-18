import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Form, NgForm, FormArray } from '@angular/forms';
import { Child } from '../child.model';
import { ChildService } from '../../shared/child.service';
import { GroupService } from 'src/app/shared/group.service';
import { NewChildDetailComponent } from '../new-child-detail/new-child-detail.component';


@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css'],
  providers: [ChildService, GroupService, Child]
})
export class NewChildComponent implements OnInit {

  @ViewChild('f') newChildForm: NgForm;
  genders = ['female', 'male'];
  // @ViewChild('newChild') newChild: any;
  newChild: any;
  submitted = false;
  groups = [];

  constructor(private childService: ChildService, private groupService: GroupService) {
    for (let group of groupService.groups) {
      this.groups.push(group);
    }
    this.newChild = {};
  }

  ngOnInit(): void {
    // this.newChild = {};
  }


// TODO: get chosen group value into NgForm
onSubmit(form: NgForm) {
  this.newChild = new Child(
    this.generateNewId(),
    form.value.childData.firstName,
    form.value.childData.lastName,
    form.value.childData.email,
    form.value.childData.street,
    form.value.childData.zip,
    form.value.childData.city,
    form.value.childData.phone,
    form.value.childData.dob,
    form.value.childData.gender,
    form.value.childData.groups,
    "imagePath");
  this.childService.addChild(this.newChild);
  console.log("new child:" + this.newChild.toString());
  this.submitted = true;
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
