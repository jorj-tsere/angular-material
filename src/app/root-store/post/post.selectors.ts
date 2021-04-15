import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPost from './post.reducer';
import { State } from './posts-state';

// Lookup the 'Post' feature state managed by NgRx
const getPostState = createFeatureSelector<State>(
  fromPost.PostFeatureKey
);

export const selectPostList = createSelector(
  getPostState,
  state => state.posts
);

export const selectPostError = createSelector(
  getPostState,
  state => state.error
);

export const selectPostIsLoading = createSelector(
  getPostState,
  state => state.isLoading
);

export const selectAppComponentViewModel = createSelector(
  selectPostList,
  selectPostError,
  selectPostIsLoading,
  (posts, error, loading) => ({
    posts,
    error,
    loading
  })
);