import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty26Component } from './kitty26.component';

describe('Kitty26Component', () => {
  let component: Kitty26Component;
  let fixture: ComponentFixture<Kitty26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
