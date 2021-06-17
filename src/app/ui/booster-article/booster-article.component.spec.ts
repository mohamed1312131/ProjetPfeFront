import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterArticleComponent } from './booster-article.component';

describe('BoosterArticleComponent', () => {
  let component: BoosterArticleComponent;
  let fixture: ComponentFixture<BoosterArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoosterArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoosterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
