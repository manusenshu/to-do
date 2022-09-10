import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPedienteComponent } from './editar-Pediente.component';

describe('EditarPedienteComponent', () => {
  let component: EditarPedienteComponent;
  let fixture: ComponentFixture<EditarPedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
