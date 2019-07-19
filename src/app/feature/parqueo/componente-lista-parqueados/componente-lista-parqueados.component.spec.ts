import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteListaParqueadosComponent } from './componente-lista-parqueados.component';

describe('ComponenteListaParqueadosComponent', () => {
  let component: ComponenteListaParqueadosComponent;
  let fixture: ComponentFixture<ComponenteListaParqueadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteListaParqueadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteListaParqueadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
