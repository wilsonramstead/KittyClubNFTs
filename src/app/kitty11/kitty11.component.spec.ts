import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty11Component } from './kitty11.component';

describe('Kitty11Component', () => {
  let component: Kitty11Component;
  let fixture: ComponentFixture<Kitty11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
