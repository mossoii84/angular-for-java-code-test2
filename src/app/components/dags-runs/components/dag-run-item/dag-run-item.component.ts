import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { DagsRunsType } from '../../types/dags-runs';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {ChangeDagStatusType} from "../../types/change-dag-status.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dag-run-item',
  templateUrl: './dag-run-item.component.html',
  styleUrls: ['./dag-run-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagRunItemComponent {
  @Input() dag: DagsRunsType;

  @Output() changeDagStatus = new EventEmitter<ChangeDagStatusType>();

  constructor(private router: Router) {}

  public onChangeDagStatus(event: MatSlideToggleChange): void {
    this.changeDagStatus.emit({dagId: this.dag.id, dagStatus: +event.checked})
  }

  // public redirectToInfoPage(): void {
  //   this.router.navigate(['/dag-info/' + this.dag.id])
  // }
}
