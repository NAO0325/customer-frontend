import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertypeDetailsComponent } from './customertype-details.component';

describe('CustomertypeDetailsComponent', () => {
  let component: CustomertypeDetailsComponent;
  let fixture: ComponentFixture<CustomertypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomertypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
