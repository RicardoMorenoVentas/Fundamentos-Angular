import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolarizacionComponent } from './interpolarizacion.component';

describe('InterpolarizacionComponent', () => {
  let component: InterpolarizacionComponent;
  let fixture: ComponentFixture<InterpolarizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolarizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolarizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
