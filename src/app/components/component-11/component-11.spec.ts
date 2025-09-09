import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component11 } from './component-11';

describe('Component11', () => {
  let component: Component11;
  let fixture: ComponentFixture<Component11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
