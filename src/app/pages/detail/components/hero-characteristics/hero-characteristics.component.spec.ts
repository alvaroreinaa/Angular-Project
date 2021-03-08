import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCharacteristicsComponent } from './hero-characteristics.component';

describe('HeroCharacteristicsComponent', () => {
  let component: HeroCharacteristicsComponent;
  let fixture: ComponentFixture<HeroCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCharacteristicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
