import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaParqueoComponent } from './lista-parqueo.component';

describe('ListaParqueoComponent', () => {
  let component: ListaParqueoComponent;
  let fixture: ComponentFixture<ListaParqueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaParqueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaParqueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
