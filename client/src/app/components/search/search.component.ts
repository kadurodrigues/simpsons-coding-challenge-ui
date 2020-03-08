import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SearchCharactersAction } from '../../actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  search: FormControl = new FormControl('');

  constructor(private store: Store<any>) { }

  formatSearchInputValue(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  handleSearch() {
    const query = this.formatSearchInputValue(this.search.value)
    this.store.dispatch(SearchCharactersAction.search({ query }));
  }

}
