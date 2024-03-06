import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FotosHeroePage } from './fotos-heroe.page';

describe('FotosHeroePage', () => {
  let component: FotosHeroePage;
  let fixture: ComponentFixture<FotosHeroePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FotosHeroePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
