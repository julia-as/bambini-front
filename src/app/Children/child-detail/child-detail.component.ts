import { Component, OnInit } from '@angular/core';
import { Child } from '../child.model';
import { ChildService } from 'src/app/shared/child.service';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent implements OnInit {

  child: Child;

  constructor(private childService: ChildService) { }

  ngOnInit(): void {
  }

}
