import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupReviewsComponent } from './group-reviews.component';

describe('GroupReviewsComponent', () => {
  let component: GroupReviewsComponent;
  let fixture: ComponentFixture<GroupReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
