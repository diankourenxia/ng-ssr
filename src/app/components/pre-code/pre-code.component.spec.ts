import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCodeComponent } from './pre-code.component';

describe('PreCodeComponent', () => {
  let component: PreCodeComponent;
  let fixture: ComponentFixture<PreCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
