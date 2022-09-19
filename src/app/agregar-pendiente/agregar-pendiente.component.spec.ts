import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPendienteComponent } from './agregar-pendiente.component';

describe('AgregarPendienteComponent', () => {
  let component: AgregarPendienteComponent;
  let fixture: ComponentFixture<AgregarPendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
