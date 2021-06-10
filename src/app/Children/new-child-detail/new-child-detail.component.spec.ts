import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChildDetailComponent } from './new-child-detail.component';

describe('NewChildDetailComponent', () => {
  let component: NewChildDetailComponent;
  let fixture: ComponentFixture<NewChildDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChildDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChildDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
