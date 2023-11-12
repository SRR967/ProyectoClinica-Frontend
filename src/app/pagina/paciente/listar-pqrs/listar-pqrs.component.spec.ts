import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPQRSComponent } from './listar-pqrs.component';

describe('ListarPQRSComponent', () => {
  let component: ListarPQRSComponent;
  let fixture: ComponentFixture<ListarPQRSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPQRSComponent]
    });
    fixture = TestBed.createComponent(ListarPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
