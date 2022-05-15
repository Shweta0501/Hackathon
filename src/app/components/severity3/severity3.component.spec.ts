import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Severity3Component } from './severity3.component';

describe('Severity3Component', () => {
  let component: Severity3Component;
  let fixture: ComponentFixture<Severity3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Severity3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Severity3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
