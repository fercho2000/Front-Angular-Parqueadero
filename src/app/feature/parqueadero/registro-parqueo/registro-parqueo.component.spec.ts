import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroParqueoComponent } from './registro-parqueo.component';

describe('RegistroParqueoComponent', () => {
  let component: RegistroParqueoComponent;
  let fixture: ComponentFixture<RegistroParqueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroParqueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroParqueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
