import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { Store } from '@ngrx/store';
import { TestStore } from '../../stubs/store.stubs';
import { FormControl} from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: TestStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        { provide: Store, useClass: TestStore }
      ]
    }).compileComponents();
  }));

  beforeEach((inject([Store], (testStore: TestStore<any>) => {
    store = testStore;
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format value toUpperCase', () => {
    const value = component.formatSearchInputValue('hello');
    expect(value).toEqual('Hello');
  });

  it('should dispatch a SearchAction with a query', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.search = new FormControl('test');
    component.handleSearch();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith({ query: 'Test', type: '[Search Character] Search' })
  });
});
