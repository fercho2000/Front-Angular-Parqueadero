import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePaginaParqueaderoComponent } from './componente-pagina-parqueadero.component';

describe('ComponentePaginaParqueaderoComponent', () => {
  let component: ComponentePaginaParqueaderoComponent;
  let fixture: ComponentFixture<ComponentePaginaParqueaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePaginaParqueaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePaginaParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
