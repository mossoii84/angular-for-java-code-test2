import {
  initialDagsRunsState,
  InitialDagsRunsStateType,
} from '../state/dags-runs.state';
import {
  DagsRunsActions,
  DagsRunsActionsType,
} from '../actions/dags-runs.actions';
import { LOADING_STATUSES } from '../../common-constants/loadingStatuses';

export const dagsRunsReducer = (
  state = initialDagsRunsState,
  action: DagsRunsActionsType,
): InitialDagsRunsStateType => {
  switch (action.type) {
    case DagsRunsActions.GetDagsRunsDataRequest:
      return {
        ...state,
        dagsRunsDataLoadingStatus: LOADING_STATUSES.loading,
      };

    case DagsRunsActions.GetDagsRunsDataSuccess:
      return {
        ...state,
        dagsRunsDataLoadingStatus: LOADING_STATUSES.loaded,
        dagsRunsData: action.payload
      };

    case DagsRunsActions.ChangeFiltersConfig:
      return {
        ...state,
        filtersConfig: action.payload
      };

    case DagsRunsActions.ChangeDagStatus: {
      const result = [...state.dagsRunsData];
      const idx = result.findIndex(({id}) => id === action.payload.dagId);
      result[idx] = {
        ...result[idx],
        status: action.payload.dagStatus,
      }
      return {
        ...state,
        dagsRunsData: result
      };
    }

    default:
      return state;
  }
};
