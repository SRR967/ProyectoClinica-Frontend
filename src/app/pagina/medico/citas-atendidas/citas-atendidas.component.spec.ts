import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasAtendidasComponent } from './citas-atendidas.component';

describe('CitasAtendidasComponent', () => {
  let component: CitasAtendidasComponent;
  let fixture: ComponentFixture<CitasAtendidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasAtendidasComponent]
    });
    fixture = TestBed.createComponent(CitasAtendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
