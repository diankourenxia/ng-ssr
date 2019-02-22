import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseListComponent } from './choose-list.component';

describe('ChooseListComponent', () => {
  let component: ChooseListComponent;
  let fixture: ComponentFixture<ChooseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
