import {Action} from "@ngrx/store";
import {DagsRunsType} from "../../components/dags-runs/types/dags-runs";
import {DagsRunsFilterConfigType} from "../../common-types/dags-runs-filter-config.type";
import {ChangeDagStatusType} from "../../components/dags-runs/types/change-dag-status.type";

export enum DagsRunsActions {
  GetDagsRunsDataRequest = '[dags-runs]: get data request',
  GetDagsRunsDataSuccess = '[dags-runs]: get data success',
  GetDagsRunsDataFail = '[dags-runs]: get data fail',
  ChangeFiltersConfig = '[dags-runs]: change filters config',
  ChangeDagStatus = '[dags-runs]: change dag status',
}

export class GetDagsRunsDataRequest implements Action {
  public readonly type = DagsRunsActions.GetDagsRunsDataRequest;
}

export class GetDagsRunsDataSuccess implements Action {
  public readonly type = DagsRunsActions.GetDagsRunsDataSuccess;

  constructor(public payload: DagsRunsType[]) {}
}

export class GetDagsRunsDataFail implements Action {
  public readonly type = DagsRunsActions.GetDagsRunsDataFail;
}

export class ChangeFiltersConfig implements Action {
  public readonly type = DagsRunsActions.ChangeFiltersConfig;

  constructor(public payload: DagsRunsFilterConfigType) {}
}

export class ChangeDagStatus implements Action {
  public readonly type = DagsRunsActions.ChangeDagStatus;

  constructor(public payload: ChangeDagStatusType) {}
}

export type DagsRunsActionsType = GetDagsRunsDataRequest | GetDagsRunsDataSuccess | GetDagsRunsDataFail | ChangeFiltersConfig | ChangeDagStatus;
