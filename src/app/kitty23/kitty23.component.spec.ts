import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty23Component } from './kitty23.component';

describe('Kitty23Component', () => {
  let component: Kitty23Component;
  let fixture: ComponentFixture<Kitty23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
