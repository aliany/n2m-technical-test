import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuperheroComponent } from './search-superhero.component';

describe('SearchSuperheroComponent', () => {
  let component: SearchSuperheroComponent;
  let fixture: ComponentFixture<SearchSuperheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSuperheroComponent]
    });
    fixture = TestBed.createComponent(SearchSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
