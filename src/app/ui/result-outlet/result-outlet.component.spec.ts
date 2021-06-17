import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOutletComponent } from './result-outlet.component';

describe('ResultOutletComponent', () => {
  let component: ResultOutletComponent;
  let fixture: ComponentFixture<ResultOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
