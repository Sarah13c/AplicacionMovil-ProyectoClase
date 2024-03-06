import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetHeroePage } from './det-heroe.page';

describe('DetHeroePage', () => {
  let component: DetHeroePage;
  let fixture: ComponentFixture<DetHeroePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetHeroePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
