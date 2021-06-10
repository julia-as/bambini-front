import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [GroupService]
})
export class HeaderComponent implements OnInit {

  @Input() groups = [];
  selected: any;

  constructor(groupService: GroupService) {
    this.groups.push(groupService.groups);
  }

  ngOnInit(): void {
  }

  update(e) {
    this.selected = e;
  }

}
