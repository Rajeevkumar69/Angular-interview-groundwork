import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component5 } from './component-5';

describe('Component5', () => {
  let component: Component5;
  let fixture: ComponentFixture<Component5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
