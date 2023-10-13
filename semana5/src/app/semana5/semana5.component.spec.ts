import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana5Component } from './semana5.component';

describe('Semana5Component', () => {
  let component: Semana5Component;
  let fixture: ComponentFixture<Semana5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Semana5Component]
    });
    fixture = TestBed.createComponent(Semana5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
