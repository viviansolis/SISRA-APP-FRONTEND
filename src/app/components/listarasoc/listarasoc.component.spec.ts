import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarasocComponent } from './listarasoc.component';

describe('ListarasocComponent', () => {
  let component: ListarasocComponent;
  let fixture: ComponentFixture<ListarasocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarasocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarasocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
