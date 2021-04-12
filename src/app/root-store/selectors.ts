import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
    JokeSelectors
} from './joke'
import {
    PostSelectors
} from './post'

export const selectError = createSelector(
    JokeSelectors.selectJokeError,
    PostSelectors.selectPostError,
    (selectJokeError: string, selectPostError: string) => {
        console.warn('from root selector errors: ', selectJokeError, selectPostError)
    }
);


export const selectIsLoading = createSelector(
    JokeSelectors.selectJokeIsLoading,
    PostSelectors.selectPostIsLoading,
    (selectJokeIsLoading: boolean, selectPostIsLoading: boolean) => {
        console.warn('from root selectIsLoading: ', selectJokeIsLoading, selectPostIsLoading)
    }
);