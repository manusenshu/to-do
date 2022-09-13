import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPendienteComponent } from './editar-pendiente.component';

describe('EditarPendienteComponent', () => {
  let component: EditarPendienteComponent;
  let fixture: ComponentFixture<EditarPendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
