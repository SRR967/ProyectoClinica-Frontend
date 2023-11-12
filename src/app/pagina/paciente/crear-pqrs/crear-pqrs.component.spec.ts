import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPQRSComponent } from './crear-pqrs.component';

describe('CrearPQRSComponent', () => {
  let component: CrearPQRSComponent;
  let fixture: ComponentFixture<CrearPQRSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPQRSComponent]
    });
    fixture = TestBed.createComponent(CrearPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
