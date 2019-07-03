import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteManageComponent } from './site-manage.component';

describe('SiteManageComponent', () => {
  let component: SiteManageComponent;
  let fixture: ComponentFixture<SiteManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
