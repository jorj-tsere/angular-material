import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { JokeUIActions } from 'app/root-store/joke';
import { selectAppComponentJokeViewModel } from 'app/root-store/joke/joke.selectors';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  appComponentViewModel$ = this.store.select(selectAppComponentJokeViewModel);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(JokeUIActions.appComponentInitialized());
  }

  onLoadAllRequested() {
    this.store.dispatch(JokeUIActions.loadAllRequested());
  }

  onLoadCategoryRequested(category: string) {
    this.store.dispatch(JokeUIActions.loadCategoryRequested({ category }));
  }
}
