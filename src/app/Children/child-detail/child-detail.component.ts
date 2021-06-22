import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../child.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ChildService } from 'src/app/shared/child.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent implements OnInit {

  child: Child;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private childService: ChildService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.child = this.childService.getChild(this.id).pipe();
  }

}
