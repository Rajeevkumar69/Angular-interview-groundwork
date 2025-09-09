import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component10 } from './component-10';

describe('Component10', () => {
  let component: Component10;
  let fixture: ComponentFixture<Component10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
