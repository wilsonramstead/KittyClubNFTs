import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kitty22Component } from './kitty22.component';

describe('Kitty22Component', () => {
  let component: Kitty22Component;
  let fixture: ComponentFixture<Kitty22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kitty22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kitty22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
