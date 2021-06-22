import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewChildComponent } from './Children/new-child/new-child.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildListComponent } from './Children/child-list/child-list.component';
import { ChildDetailComponent } from './Children/child-detail/child-detail.component';
import { NewChildDetailComponent } from './Children/new-child-detail/new-child-detail.component';
import { ChildService } from './shared/child.service';
import { LoggingService } from './shared/logging.service';
import { GroupService } from './shared/group.service';
import { Child } from './Children/child.model';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'children', pathMatch: 'full' },
  { path: 'children', component: ChildListComponent },
  { path: 'children/:id', component: ChildDetailComponent },
  { path: 'newChild', component: NewChildComponent }
  // { path: '*', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewChildComponent,
    HeaderComponent,
    ChildListComponent,
    ChildDetailComponent,
    NewChildDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    ChildService,
    LoggingService,
    GroupService,
    Child
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
