import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThirdComponentComponent } from './app-third-component.component';

describe('AppThirdComponentComponent', () => {
  let component: AppThirdComponentComponent;
  let fixture: ComponentFixture<AppThirdComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppThirdComponentComponent]
    });
    fixture = TestBed.createComponent(AppThirdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
