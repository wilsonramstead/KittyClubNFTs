import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty4Component } from './kitty4.component';

describe('Kitty4Component', () => {
  let component: Kitty4Component;
  let fixture: ComponentFixture<Kitty4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
