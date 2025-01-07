import { LoadingActionsType } from '../common-types/loading-actions.type';
import { createAction } from '@ngrx/store';

export function createLoadingActions(type: string): LoadingActionsType {
  return {
    REQUESTED: createAction(type + 'requested'),
    SUCCEEDED: createAction(type + 'succeeded'),
    FAILED: createAction(type + 'failed'),
  };
}
