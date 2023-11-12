import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasPendientesComponent } from './citas-pendientes.component';

describe('CitasPendientesComponent', () => {
  let component: CitasPendientesComponent;
  let fixture: ComponentFixture<CitasPendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasPendientesComponent]
    });
    fixture = TestBed.createComponent(CitasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
