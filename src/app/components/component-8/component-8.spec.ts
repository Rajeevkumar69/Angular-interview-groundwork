import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component8 } from './component-8';

describe('Component8', () => {
  let component: Component8;
  let fixture: ComponentFixture<Component8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
