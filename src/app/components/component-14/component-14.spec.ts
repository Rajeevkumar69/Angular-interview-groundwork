import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component14 } from './component-14';

describe('Component14', () => {
  let component: Component14;
  let fixture: ComponentFixture<Component14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component14);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
