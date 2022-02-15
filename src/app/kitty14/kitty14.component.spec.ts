import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty14Component } from './kitty14.component';

describe('Kitty14Component', () => {
  let component: Kitty14Component;
  let fixture: ComponentFixture<Kitty14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
