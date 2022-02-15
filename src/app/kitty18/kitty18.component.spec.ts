import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty18Component } from './kitty18.component';

describe('Kitty18Component', () => {
  let component: Kitty18Component;
  let fixture: ComponentFixture<Kitty18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
