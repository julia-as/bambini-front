import { Component, OnInit } from '@angular/core';
import { Child } from '../child.model';

@Component({
  selector: 'app-new-child-detail',
  templateUrl: './new-child-detail.component.html',
  styleUrls: ['./new-child-detail.component.css']
})
export class NewChildDetailComponent implements OnInit {

  // child: Child;

  constructor() {
    // this.child = child;
   }

  ngOnInit(): void {
  }

}
