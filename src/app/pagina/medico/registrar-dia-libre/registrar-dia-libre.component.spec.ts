import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDiaLibreComponent } from './registrar-dia-libre.component';

describe('RegistrarDiaLibreComponent', () => {
  let component: RegistrarDiaLibreComponent;
  let fixture: ComponentFixture<RegistrarDiaLibreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarDiaLibreComponent]
    });
    fixture = TestBed.createComponent(RegistrarDiaLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
