import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty3Component } from './kitty3.component';

describe('Kitty3Component', () => {
  let component: Kitty3Component;
  let fixture: ComponentFixture<Kitty3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
