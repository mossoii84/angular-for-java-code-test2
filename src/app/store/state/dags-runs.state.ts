import {LoadingStatus} from "../../common-types/loadingStatus";
import {LOADING_STATUSES} from "../../common-constants/loadingStatuses";
import {DagsRunsType} from "../../components/dags-runs/types/dags-runs";
import {DagsRunsFilterConfigType} from "../../common-types/dags-runs-filter-config.type";


export type InitialDagsRunsStateType = {
  dagsRunsDataLoadingStatus: LoadingStatus,
  dagsRunsData: DagsRunsType[],
  filtersConfig: DagsRunsFilterConfigType,
}

export const initialDagsRunsState: InitialDagsRunsStateType = {
  dagsRunsDataLoadingStatus: LOADING_STATUSES.default,
  dagsRunsData: [],
  filtersConfig: {
    selectedDagsStatus: 2,
    tagSearchString: '',
    nameSearchString: '',
  }
}
