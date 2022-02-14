import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty12Component } from './kitty12.component';

describe('Kitty12Component', () => {
  let component: Kitty12Component;
  let fixture: ComponentFixture<Kitty12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
