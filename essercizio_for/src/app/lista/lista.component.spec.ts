import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  
  let number: number = 2;
  console.log(number);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaComponent]
    });
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
