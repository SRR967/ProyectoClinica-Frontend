import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicarConsultaComponent } from './radicar-consulta.component';

describe('RadicarConsultaComponent', () => {
  let component: RadicarConsultaComponent;
  let fixture: ComponentFixture<RadicarConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadicarConsultaComponent]
    });
    fixture = TestBed.createComponent(RadicarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
