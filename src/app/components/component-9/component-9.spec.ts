import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component9 } from './component-9';

describe('Component9', () => {
  let component: Component9;
  let fixture: ComponentFixture<Component9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
