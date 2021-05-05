import { Component, OnInit } from '@angular/core';
import { Child } from '../child.model';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

   public showInputField: Boolean = false;
   children: Child[] = [new Child("Herzog", "Greta", new Date(1-1-2019), "../../assets/puppy1.jpg"), 
   new Child("Baerbock", "Lasse", new Date(3-4-2020), "../../../assets/crossfit.jpg")];

  constructor() { }

  ngOnInit(): void {
  }

    onNewChild() {
    this.showInputField = true;
  }

  getColour() {
    return this.showInputField === false ? 'lightBlue' : 'lightGrey';
  }
}
