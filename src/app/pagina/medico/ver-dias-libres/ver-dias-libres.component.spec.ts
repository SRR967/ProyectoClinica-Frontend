import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDiasLibresComponent } from './ver-dias-libres.component';

describe('VerDiasLibresComponent', () => {
  let component: VerDiasLibresComponent;
  let fixture: ComponentFixture<VerDiasLibresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerDiasLibresComponent]
    });
    fixture = TestBed.createComponent(VerDiasLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
