import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqNotificationComponent } from './faq-notification.component';

describe('FaqNotificationComponent', () => {
  let component: FaqNotificationComponent;
  let fixture: ComponentFixture<FaqNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqNotificationComponent]
    });
    fixture = TestBed.createComponent(FaqNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
