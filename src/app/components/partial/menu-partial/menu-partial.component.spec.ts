import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPartialComponent } from './menu-partial.component';

describe('MenuPartialComponent', () => {
  let component: MenuPartialComponent;
  let fixture: ComponentFixture<MenuPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
