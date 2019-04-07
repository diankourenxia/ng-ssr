import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyMenuComponent } from './tiny-menu.component';

describe('TinyMenuComponent', () => {
  let component: TinyMenuComponent;
  let fixture: ComponentFixture<TinyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
