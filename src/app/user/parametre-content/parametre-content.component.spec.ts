import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreContentComponent } from './parametre-content.component';

describe('ParametreContentComponent', () => {
  let component: ParametreContentComponent;
  let fixture: ComponentFixture<ParametreContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametreContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
