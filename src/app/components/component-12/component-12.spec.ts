import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component12 } from './component-12';

describe('Component12', () => {
  let component: Component12;
  let fixture: ComponentFixture<Component12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
