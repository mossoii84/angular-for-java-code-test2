import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { DagsRunsType } from '../dags-runs/types/dags-runs';
import { selectDagFromIndex } from '../../store/selectors/dags-runs.selectors';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-dag-info-container',
  template: '<app-dag-info [selectedDag]="selectedDag$ | async"></app-dag-info>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagInfoContainer {
  public selectedDag$: Observable<DagsRunsType>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.activatedRoute.params.pipe(untilDestroyed(this)).subscribe((data) => {
      const dagId = +(data as any).id;
      this.selectedDag$ = this.store.pipe(select(selectDagFromIndex, { dagId }));
    });
  }
}
