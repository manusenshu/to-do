import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedientesComponent } from './listar-Pedientes.component';

describe('ListarPedientesComponent', () => {
  let component: ListarPedientesComponent;
  let fixture: ComponentFixture<ListarPedientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPedientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
