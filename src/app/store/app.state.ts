import {initialDagsRunsState, InitialDagsRunsStateType} from "./state/dags-runs.state";

export type AppState = {
  dagsRuns: InitialDagsRunsStateType,
}

export const initialAppState: AppState = {
  dagsRuns: initialDagsRunsState
}
