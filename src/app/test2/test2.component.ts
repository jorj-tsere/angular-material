import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostUIActions } from 'app/root-store/post';
import { selectAppComponentViewModel } from 'app/root-store/post/post.selectors';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  appComponentViewModel$ = this.store.select(selectAppComponentViewModel);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    console.log('Test2Component init');
    this.store.dispatch(PostUIActions.appComponent2Initialized());
  }

  onLoadAllRequested() {
    this.store.dispatch(PostUIActions.loadAll2Requested());
  }

  onLoadCategoryRequested(category: string) {
    this.store.dispatch(PostUIActions.loadCategory2Requested({ category }));
  }
}
