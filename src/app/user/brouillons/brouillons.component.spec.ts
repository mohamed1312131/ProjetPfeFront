import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouillonsComponent } from './brouillons.component';

describe('BrouillonsComponent', () => {
  let component: BrouillonsComponent;
  let fixture: ComponentFixture<BrouillonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrouillonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrouillonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
