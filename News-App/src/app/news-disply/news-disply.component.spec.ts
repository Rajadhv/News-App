import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDisplyComponent } from './news-disply.component';

describe('NewsDisplyComponent', () => {
  let component: NewsDisplyComponent;
  let fixture: ComponentFixture<NewsDisplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDisplyComponent]
    });
    fixture = TestBed.createComponent(NewsDisplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
