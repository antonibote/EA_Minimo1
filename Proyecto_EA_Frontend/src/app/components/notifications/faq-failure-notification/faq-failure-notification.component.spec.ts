import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqFailureNotificationComponent } from './faq-failure-notification.component';

describe('FaqFailureNotificationComponent', () => {
  let component: FaqFailureNotificationComponent;
  let fixture: ComponentFixture<FaqFailureNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqFailureNotificationComponent]
    });
    fixture = TestBed.createComponent(FaqFailureNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
