import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty7Component } from './kitty7.component';

describe('Kitty7Component', () => {
  let component: Kitty7Component;
  let fixture: ComponentFixture<Kitty7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
