import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty8Component } from './kitty8.component';

describe('Kitty8Component', () => {
  let component: Kitty8Component;
  let fixture: ComponentFixture<Kitty8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
