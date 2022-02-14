import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty10Component } from './kitty10.component';

describe('Kitty10Component', () => {
  let component: Kitty10Component;
  let fixture: ComponentFixture<Kitty10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
