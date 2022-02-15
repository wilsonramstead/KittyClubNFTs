import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty15Component } from './kitty15.component';

describe('Kitty15Component', () => {
  let component: Kitty15Component;
  let fixture: ComponentFixture<Kitty15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
