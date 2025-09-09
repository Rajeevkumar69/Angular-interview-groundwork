import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component13 } from './component-13';

describe('Component13', () => {
  let component: Component13;
  let fixture: ComponentFixture<Component13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
