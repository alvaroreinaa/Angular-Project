import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlotComponent } from './home-plot.component';

describe('HomePlotComponent', () => {
  let component: HomePlotComponent;
  let fixture: ComponentFixture<HomePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
