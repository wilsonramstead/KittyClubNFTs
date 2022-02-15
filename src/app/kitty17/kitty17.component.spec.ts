import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty17Component } from './kitty17.component';

describe('Kitty17Component', () => {
  let component: Kitty17Component;
  let fixture: ComponentFixture<Kitty17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
