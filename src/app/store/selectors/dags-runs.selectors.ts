import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { InitialDagsRunsStateType } from '../state/dags-runs.state';

const selectDagsRuns = (state: AppState) => state.dagsRuns;

export const selectDagsRunsDataLoadingStatus = createSelector(
  selectDagsRuns,
  (state: InitialDagsRunsStateType) => state.dagsRunsDataLoadingStatus,
);

export const selectFiltersConfig = createSelector(
  selectDagsRuns,
  (state: InitialDagsRunsStateType) => state.filtersConfig,
);

export const selectDagsRunsData = createSelector(
  selectDagsRuns,
  selectFiltersConfig,
  (state: InitialDagsRunsStateType, filtersConfig) => {
    let result = filtersConfig.selectedDagsStatus === 2
      ? state.dagsRunsData
      : state.dagsRunsData.filter(
        ({ status }) => status === filtersConfig.selectedDagsStatus,
      );
    if (filtersConfig?.nameSearchString) {
      result = result.filter(({name}) => name.includes(filtersConfig.nameSearchString))
    }
    if (filtersConfig?.tagSearchString) {
      result = result.filter(({tags}) => tags?.some(tag => tag.includes(filtersConfig.tagSearchString)))
    }
    return result;
  },
);

export const selectDagFromIndex = createSelector(selectDagsRuns, (state: InitialDagsRunsStateType, props: {dagId: number}) => {
  return state.dagsRunsData?.find(dag => dag.id === props.dagId) || state.dagsRunsData[0]; // TODO rewrite
})
