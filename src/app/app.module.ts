import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewChildComponent } from './Children/new-child/new-child.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildListComponent } from './Children/child-list/child-list.component';
import { ChildDetailComponent } from './Children/child-detail/child-detail.component';
// import { ChildServiceComponent } from './Children/child-service/child-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NewChildComponent,
    HeaderComponent,
    ChildListComponent,
    ChildDetailComponent
    // ChildServiceComponent,
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
