import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

import * as fromSupportActions from '../actions/customer-support.actions';

@Injectable()
export class CustomerSupportEffects {
  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromSupportActions.sendingCustomerSupportMessage),
      mergeMap((action) =>
        of(true).pipe(
          map((bool) =>
            fromSupportActions.sendMessageStatus({ isSentSuccess: bool })
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
