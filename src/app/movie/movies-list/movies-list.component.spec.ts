import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from '../filters/movie-filter.pipe';
import { YearFilterPipe } from '../filters/year-filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgSelectModule, HttpClientModule],
      declarations: [ MoviesListComponent, MovieFilterPipe, YearFilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
