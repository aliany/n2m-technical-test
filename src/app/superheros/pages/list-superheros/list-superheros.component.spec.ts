import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuperherosComponent } from './list-superheros.component';

describe('ListSuperherosComponent', () => {
  let component: ListSuperherosComponent;
  let fixture: ComponentFixture<ListSuperherosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSuperherosComponent]
    });
    fixture = TestBed.createComponent(ListSuperherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
