import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListascComponent } from './listasc.component';

describe('ListascComponent', () => {
  let component: ListascComponent;
  let fixture: ComponentFixture<ListascComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListascComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
