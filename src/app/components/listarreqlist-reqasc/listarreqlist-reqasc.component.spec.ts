import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarreqlistReqascComponent } from './listarreqlist-reqasc.component';

describe('ListarreqlistReqascComponent', () => {
  let component: ListarreqlistReqascComponent;
  let fixture: ComponentFixture<ListarreqlistReqascComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarreqlistReqascComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarreqlistReqascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
