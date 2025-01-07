import {CommonHeaderComponent} from "./common-header.component";
import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [CommonHeaderComponent],
  imports: [MatIconModule],
  providers: [],
  exports: [CommonHeaderComponent],
  bootstrap: [],
})
export class CommonHeaderModule {}
