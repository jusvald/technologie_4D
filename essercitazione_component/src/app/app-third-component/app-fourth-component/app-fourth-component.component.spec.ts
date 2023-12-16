import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFourthComponentComponent } from './app-fourth-component.component';

describe('AppFourthComponentComponent', () => {
  let component: AppFourthComponentComponent;
  let fixture: ComponentFixture<AppFourthComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFourthComponentComponent]
    });
    fixture = TestBed.createComponent(AppFourthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
