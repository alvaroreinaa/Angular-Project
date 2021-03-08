import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFunctioningComponent } from './home-functioning.component';

describe('HomeFunctioningComponent', () => {
  let component: HomeFunctioningComponent;
  let fixture: ComponentFixture<HomeFunctioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFunctioningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFunctioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
