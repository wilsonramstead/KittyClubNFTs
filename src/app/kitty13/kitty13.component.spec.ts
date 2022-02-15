import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty13Component } from './kitty13.component';

describe('Kitty13Component', () => {
  let component: Kitty13Component;
  let fixture: ComponentFixture<Kitty13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
