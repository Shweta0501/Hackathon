import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Severity1Component } from './severity1.component';

describe('Severity1Component', () => {
  let component: Severity1Component;
  let fixture: ComponentFixture<Severity1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Severity1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Severity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
