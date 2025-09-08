import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components6 } from './components-6';

describe('Components6', () => {
  let component: Components6;
  let fixture: ComponentFixture<Components6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Components6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
