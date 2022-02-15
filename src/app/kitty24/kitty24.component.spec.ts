import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty24Component } from './kitty24.component';

describe('Kitty24Component', () => {
  let component: Kitty24Component;
  let fixture: ComponentFixture<Kitty24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
