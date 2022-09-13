import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPendientesComponent } from './listar-Pendientes.component';

describe('ListarPendientesComponent', () => {
  let component: ListarPendientesComponent;
  let fixture: ComponentFixture<ListarPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
