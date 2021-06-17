import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOutletComponent } from './content-outlet.component';

describe('ContentOutletComponent', () => {
  let component: ContentOutletComponent;
  let fixture: ComponentFixture<ContentOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
