import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../child.model';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent implements OnInit {

  @Input() child: Child;

  constructor() { }

  ngOnInit(): void {
  }

}
