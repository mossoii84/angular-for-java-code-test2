import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../app.state";
import {dagsRunsReducer} from "./dags-runs.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {
  dagsRuns: dagsRunsReducer
}
