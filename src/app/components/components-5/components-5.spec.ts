import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Components5 } from './components-5';

describe('Components5', () => {
  let component: Components5;
  let fixture: ComponentFixture<Components5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Components5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Components5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
