import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty5Component } from './kitty5.component';

describe('Kitty5Component', () => {
  let component: Kitty5Component;
  let fixture: ComponentFixture<Kitty5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
