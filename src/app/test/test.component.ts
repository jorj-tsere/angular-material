import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAppComponentViewModel, JokeUIActions } from 'app/root-store/joke-state';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  appComponentViewModel$ = this.store.select(selectAppComponentViewModel);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    console.log('[TestComponent] call JokeUIActions.appComponentInitialized()');
    this.store.dispatch(JokeUIActions.appComponentInitialized());
  }

  onLoadAllRequested() {
    console.log('[TestComponent] call JokeUIActions.loadAllRequested()');
    this.store.dispatch(JokeUIActions.loadAllRequested());
  }

  onLoadCategoryRequested(category: string) {
    console.log('[TestComponent] call JokeUIActions.loadCategoryRequested({ category })')
    this.store.dispatch(JokeUIActions.loadCategoryRequested({ category }));
  }
}
