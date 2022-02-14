import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty9Component } from './kitty9.component';

describe('Kitty9Component', () => {
  let component: Kitty9Component;
  let fixture: ComponentFixture<Kitty9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
