import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjourComponent } from './ajour.component';

describe('AjourComponent', () => {
  let component: AjourComponent;
  let fixture: ComponentFixture<AjourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
