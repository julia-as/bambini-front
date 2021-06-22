import { Component, OnInit } from '@angular/core';
import { Child } from '../child.model';
import { ChildService } from '../../shared/child.service';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css'],
  providers: [ChildService]
})
export class ChildListComponent implements OnInit {

   public showInputField: Boolean = false;
   children: Child[] = [];
   clicked = false;
   
  constructor(private childService: ChildService) { }

  ngOnInit(): void {
    // this.children = this.childService.children;
        this.childService.getAllChildren()
          .subscribe(response => {
            response.forEach(element => {
              this.children.push(element)
            });
            });
  }


    onNewChild() {
    this.showInputField = true;
  }

  getColour() {
    return this.showInputField === false ? 'lightBlue' : 'lightGrey';
  }

  onClicked() {
    this.clicked = true;
  }
}
