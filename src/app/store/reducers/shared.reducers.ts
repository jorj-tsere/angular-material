import { Action, createReducer, on } from '@ngrx/store';
import { sharedUpdateSettings } from '@store/actions/shared.actions';

export const sharedFeatureKey = 'shared';

export interface State {
  title: string;
  isShowSidebar: boolean;
}

export const initialState: State = {
  title: null,
  isShowSidebar: null
};

export const reducer = createReducer(
  initialState,
  on(sharedUpdateSettings, (state, action) => {
    return {
      ...state,
      title: action.data.title || '',
      isShowSidebar: action.data.title || '',
    };
  }),
);
