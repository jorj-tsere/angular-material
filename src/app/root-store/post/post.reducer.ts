import { Action, createReducer, on } from '@ngrx/store';
import * as PostAPIActions from './api.actions';
import { State } from './posts-state';
import * as PostUIActions from './ui.actions';


export const PostFeatureKey = 'POST_STORE';

export const initialState: State = {
  posts: [],
  isLoading: false,
  error: ''
};

const postReducer = createReducer(
  initialState,
  on(
    PostUIActions.appComponent2Initialized,
    PostUIActions.loadAll2Requested,
    state => {
      return ({ ...state, isLoading: true, error: '' });
    }
  ),
  on(
    PostAPIActions.loadAllSucceeded,
    PostAPIActions.loadCategorySucceeded,
    (state, { posts }) => {

      return ({
        ...state,
        posts,
        isLoading: false,
      });
    }
  ),
  on(
    PostAPIActions.loadAllFailed,
    PostAPIActions.loadCategoryFailed,
    (state, { error }) =>  {
      return  ({
        ...state,
        error,
        isLoading: false
      });
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return postReducer(state, action);
}