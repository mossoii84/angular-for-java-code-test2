import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DagsRunsType } from '../dags-runs/types/dags-runs';

@Component({
  selector: 'app-dag-info',
  templateUrl: './dag-info.component.html',
  styleUrls: ['./dag-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DagInfoComponent {
  @Input() selectedDag: DagsRunsType | null;

  public elements: string[] = [];

  public createElement(element: string): void {
    this.elements = [...this.elements, element];
  }
}
