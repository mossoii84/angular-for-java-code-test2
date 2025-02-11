import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { DagsRunsType } from './types/dags-runs';
import {LoadingStatus} from "../../common-types/loadingStatus";
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {DAGS_STATUSES} from "./constants/dags-statuses";
import {DagsRunsFilterConfigType} from "../../common-types/dags-runs-filter-config.type";
import {ChangeDagStatusType} from "./types/change-dag-status.type";
import { FormJopComponent } from '../form-jop/form-jop.component';

@Component({
  selector: 'app-dags-runs',
  templateUrl: './dags-runs.component.html',
  styleUrls: ['./dags-runs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagsRunsComponent {
  @ViewChild('FormJopComponent') formJopComponent : FormJopComponent;

  @Input() dagsRuns: DagsRunsType[] | null;
  @Input() dagsRunsLoadingStatus: LoadingStatus | null;
  @Input() filtersConfig: DagsRunsFilterConfigType | null;

  @Output() changeDagsStatusFilter = new EventEmitter<DagsRunsFilterConfigType>();
  @Output() changeDagStatus = new EventEmitter<ChangeDagStatusType>();

  public readonly dagsStatuses = DAGS_STATUSES;

  toggleJobForm() {
    this.formJopComponent.openDialogAddJobs()
  }



  public onChangeDagsStatusFilter(event: MatButtonToggleChange | Event, field: string): void {
    if (event instanceof Event) {
      this.changeDagsStatusFilter.emit({
        ...this.filtersConfig,
        [field]: (event?.target as any)?.value // TODO rewrite
      } as DagsRunsFilterConfigType)
      return;
    }
    this.changeDagsStatusFilter.emit({
      ...this.filtersConfig,
      [field]: event.value
    } as DagsRunsFilterConfigType)
  }

  public onChangeDagsStatusFilterTag(event: Event, field: string): void {
    this.changeDagsStatusFilter.emit({
      ...this.filtersConfig,
      [field]: (event?.target as any)?.value
    } as DagsRunsFilterConfigType);
  }
}
