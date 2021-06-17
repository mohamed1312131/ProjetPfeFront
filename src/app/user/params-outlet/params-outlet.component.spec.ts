import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsOutletComponent } from './params-outlet.component';

describe('ParamsOutletComponent', () => {
  let component: ParamsOutletComponent;
  let fixture: ComponentFixture<ParamsOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
