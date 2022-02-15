import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty19Component } from './kitty19.component';

describe('Kitty19Component', () => {
  let component: Kitty19Component;
  let fixture: ComponentFixture<Kitty19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
