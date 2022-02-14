import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty6Component } from './kitty6.component';

describe('Kitty6Component', () => {
  let component: Kitty6Component;
  let fixture: ComponentFixture<Kitty6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
