// import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { ChildComponent } from '../child/child.component';

// @Component({
//   selector: 'app-child-service',
//   templateUrl: './child-service.component.html',
//   styleUrls: ['./child-service.component.css']
// })
// export class ChildServiceComponent implements OnInit {

//   private baseUrl = 'assets/config.json';

//   constructor( private http: HttpClient) { }

//   ngOnInit(): void {
//   }

// getChild(childId: Number): Observable<ChildComponent> {
//   return this.http.get<ChildComponent>(this.baseUrl + 'child/' + childId);
// }

// }
