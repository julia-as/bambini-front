import { Component } from '@angular/core';
import { ChildService } from './shared/child.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChildService]
})
export class AppComponent {
  title = 'kitaFront';
}
