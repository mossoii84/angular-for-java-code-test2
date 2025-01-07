import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonHeaderComponent {

}
