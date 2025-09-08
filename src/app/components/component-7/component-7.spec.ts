import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component7 } from './component-7';

describe('Component7', () => {
  let component: Component7;
  let fixture: ComponentFixture<Component7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
