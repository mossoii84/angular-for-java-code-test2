import { ActionCreator } from '@ngrx/store';

export type LoadingActionsType = {
  REQUESTED: ActionCreator<string, any>;
  SUCCEEDED: ActionCreator<string, any>;
  FAILED: ActionCreator<string>;
};
