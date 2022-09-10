import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPedienteComponent } from './agregar-Pediente.component';

describe('AgregarPedienteComponent', () => {
  let component: AgregarPedienteComponent;
  let fixture: ComponentFixture<AgregarPedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
