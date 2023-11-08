import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsDetailComponent } from './faqs-detail.component';

describe('FaqsDetailComponent', () => {
  let component: FaqsDetailComponent;
  let fixture: ComponentFixture<FaqsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqsDetailComponent]
    });
    fixture = TestBed.createComponent(FaqsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
