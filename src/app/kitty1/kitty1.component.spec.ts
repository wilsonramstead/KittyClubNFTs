import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty1Component } from './kitty1.component';

describe('Kitty1Component', () => {
  let component: Kitty1Component;
  let fixture: ComponentFixture<Kitty1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
