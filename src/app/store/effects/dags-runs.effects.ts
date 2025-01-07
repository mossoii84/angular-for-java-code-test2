import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DagsRunsActions } from '../actions/dags-runs.actions';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { DagsRunsService } from '../../services/dags-runs.service';
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";

@Injectable()
export class DagsRunsEffects {
  getDagsRunsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DagsRunsActions.GetDagsRunsDataRequest),
      mergeMap(() =>
        this.dagsRunsService.getDagsRuns().pipe(
          map((payload) => ({
            type: DagsRunsActions.GetDagsRunsDataSuccess,
            payload,
          })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private dagsRunsService: DagsRunsService,
    private store: Store<AppState>
  ) {}
}
