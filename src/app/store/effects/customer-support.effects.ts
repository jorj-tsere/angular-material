import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  sendingCustomerSupportMessage,
  sendMessageStatus,
} from '@store/actions/customer-support.actions';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class CustomerSupportEffects {
  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendingCustomerSupportMessage),
      mergeMap((action) =>
        of(true).pipe(map((bool) => sendMessageStatus({ isSentSuccess: bool })))
      )
    );
  });

  constructor(private actions$: Actions) {}
}
