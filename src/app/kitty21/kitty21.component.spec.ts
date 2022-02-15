import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty21Component } from './kitty21.component';

describe('Kitty21Component', () => {
  let component: Kitty21Component;
  let fixture: ComponentFixture<Kitty21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
