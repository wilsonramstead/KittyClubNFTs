import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty2Component } from './kitty2.component';

describe('Kitty2Component', () => {
  let component: Kitty2Component;
  let fixture: ComponentFixture<Kitty2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
