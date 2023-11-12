import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderComponent } from './responder.component';

describe('ResponderComponent', () => {
  let component: ResponderComponent;
  let fixture: ComponentFixture<ResponderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponderComponent]
    });
    fixture = TestBed.createComponent(ResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
