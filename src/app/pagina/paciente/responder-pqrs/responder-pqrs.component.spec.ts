import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderPQRSComponent } from './responder-pqrs.component';

describe('ResponderPQRSComponent', () => {
  let component: ResponderPQRSComponent;
  let fixture: ComponentFixture<ResponderPQRSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponderPQRSComponent]
    });
    fixture = TestBed.createComponent(ResponderPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
