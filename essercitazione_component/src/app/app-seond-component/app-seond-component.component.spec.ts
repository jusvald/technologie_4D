import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSeondComponentComponent } from './app-seond-component.component';

describe('AppSeondComponentComponent', () => {
  let component: AppSeondComponentComponent;
  let fixture: ComponentFixture<AppSeondComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSeondComponentComponent]
    });
    fixture = TestBed.createComponent(AppSeondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
