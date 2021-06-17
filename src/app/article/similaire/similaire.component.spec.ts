import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilaireComponent } from './similaire.component';

describe('SimilaireComponent', () => {
  let component: SimilaireComponent;
  let fixture: ComponentFixture<SimilaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
