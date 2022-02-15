import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty20Component } from './kitty20.component';

describe('Kitty20Component', () => {
  let component: Kitty20Component;
  let fixture: ComponentFixture<Kitty20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
