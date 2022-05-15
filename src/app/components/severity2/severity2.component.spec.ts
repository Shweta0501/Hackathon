import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Severity2Component } from './severity2.component';

describe('Severity2Component', () => {
  let component: Severity2Component;
  let fixture: ComponentFixture<Severity2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Severity2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Severity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
