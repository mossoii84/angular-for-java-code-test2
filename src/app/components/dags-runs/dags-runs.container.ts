import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DagsRunsType } from './types/dags-runs';
import { DagsRunsService } from '../../services/dags-runs.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import {
  ChangeDagStatus,
  ChangeFiltersConfig,
  GetDagsRunsDataRequest,
} from '../../store/actions/dags-runs.actions';
import {
  selectDagsRunsData,
  selectDagsRunsDataLoadingStatus,
  selectFiltersConfig,
} from '../../store/selectors/dags-runs.selectors';
import { LoadingStatus } from '../../common-types/loadingStatus';
import { DagsRunsFilterConfigType } from '../../common-types/dags-runs-filter-config.type';
import { ChangeDagStatusType } from './types/change-dag-status.type';

@Component({
  selector: 'app-dag-info-container',
  template: `<app-dags-runs
    [dagsRuns]="dagsRuns$ | async"
    [dagsRunsLoadingStatus]="dagsRunsLoadingStatus$ | async"
    [filtersConfig]="filtersConfig$ | async"
    (changeDagsStatusFilter)="onChangeDagsStatusFilter($event)"
    (changeDagStatus)="onChangeDagStatus($event)"
  ></app-dags-runs>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagsRunsContainer implements OnInit {
  public dagsRuns$: Observable<DagsRunsType[]>;
  public dagsRunsLoadingStatus$: Observable<LoadingStatus>;
  public filtersConfig$: Observable<DagsRunsFilterConfigType>;

  constructor(
    private dagsRunsService: DagsRunsService,
    private store: Store<AppState>,
  ) {}
  public ngOnInit(): void {
    this.dagsRuns$ = this.store.pipe(select(selectDagsRunsData));
    this.dagsRunsLoadingStatus$ = this.store.pipe(
      select(selectDagsRunsDataLoadingStatus),
    );
    this.filtersConfig$ = this.store.pipe(select(selectFiltersConfig));
    this.store.dispatch(new GetDagsRunsDataRequest());
  }

  public onChangeDagsStatusFilter(event: DagsRunsFilterConfigType): void {
    this.store.dispatch(new ChangeFiltersConfig(event));
  }

  public onChangeDagStatus(event: ChangeDagStatusType): void {
    this.store.dispatch(new ChangeDagStatus(event));
  }
}
