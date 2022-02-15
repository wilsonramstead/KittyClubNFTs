import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty16Component } from './kitty16.component';

describe('Kitty16Component', () => {
  let component: Kitty16Component;
  let fixture: ComponentFixture<Kitty16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
