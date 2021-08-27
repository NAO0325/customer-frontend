import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomertypeComponent } from './add-customertype.component';

describe('AddCustomertypeComponent', () => {
  let component: AddCustomertypeComponent;
  let fixture: ComponentFixture<AddCustomertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomertypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
