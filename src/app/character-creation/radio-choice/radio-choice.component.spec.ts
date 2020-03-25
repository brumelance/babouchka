import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioChoiceComponent } from './radio-choice.component';

describe('GridChoiceComponent', () => {
  let component: RadioChoiceComponent;
  let fixture: ComponentFixture<RadioChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
