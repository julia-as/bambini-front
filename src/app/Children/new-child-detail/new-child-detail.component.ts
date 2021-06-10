import { Component, OnInit } from '@angular/core';
import { Child } from '../child.model';
import { ChildService } from 'src/app/shared/child.service';

@Component({
  selector: 'app-new-child-detail',
  templateUrl: './new-child-detail.component.html',
  styleUrls: ['./new-child-detail.component.css'],
  providers: [ChildService, Child]
})
export class NewChildDetailComponent implements OnInit {

  child: Child;

  constructor(child: Child) {
    this.child = child;
   }

  ngOnInit(): void {
  }

}
