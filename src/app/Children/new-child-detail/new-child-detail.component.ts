import { Component, OnInit, Injectable, ViewChild, Input } from '@angular/core';
import { Child } from '../child.model';
import { ChildService } from 'src/app/shared/child.service';

@Component({
  selector: 'app-new-child-detail',
  templateUrl: './new-child-detail.component.html',
  styleUrls: ['./new-child-detail.component.css'],
  providers: []
})
export class NewChildDetailComponent implements OnInit {

  @Input() child: Child;

  constructor() {
   }

  ngOnInit(): void {
  }


}
