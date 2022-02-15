import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty25Component } from './kitty25.component';

describe('Kitty25Component', () => {
  let component: Kitty25Component;
  let fixture: ComponentFixture<Kitty25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
