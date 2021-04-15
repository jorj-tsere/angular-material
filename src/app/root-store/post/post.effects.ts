import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PostService } from '../../services';
import * as PostAPIActions from './api.actions';
import * as PostUIActions from './ui.actions';

@Injectable()
export class PostStoreEffects {
    constructor(private postService: PostService, private actions$: Actions) { }

    loadAllPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                PostUIActions.appComponent2Initialized,
                PostUIActions.loadAll2Requested
            ),
            mergeMap(() =>
                this.postService.getPosts().pipe(
                    map(posts => {
                        return PostAPIActions.loadAllSucceeded({ posts })
                    }),
                    catchError(error =>
                        of(PostAPIActions.loadAllFailed({ error: error.message }))
                    )
                )
            )
        )
    );

    // loadCategory
    loadCategoryPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostUIActions.loadCategory2Requested),
            mergeMap(action =>
                this.postService.getPostsByCategory(action.category).pipe(
                    map(posts => PostAPIActions.loadCategorySucceeded({ posts })),
                    catchError(error =>
                        of(PostAPIActions.loadCategoryFailed({ error: error.message }))
                    )
                )
            )
        )
    );

    // showAlertOnFailure
    showAlertOnFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PostAPIActions.loadAllFailed),
                tap(({ error }) => window.alert(error))
            ),
        { dispatch: false }
    );
}