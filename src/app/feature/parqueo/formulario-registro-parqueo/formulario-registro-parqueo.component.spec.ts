import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroParqueoComponent } from './formulario-registro-parqueo.component';

describe('FormularioRegistroParqueoComponent', () => {
  let component: FormularioRegistroParqueoComponent;
  let fixture: ComponentFixture<FormularioRegistroParqueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRegistroParqueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRegistroParqueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
