import {DagsRunsComponent} from "./dags-runs.component";
import {NgModule} from "@angular/core";
import {DagsRunsRoutingModule} from "./dags-runs-routing.module";
import {DagsRunsContainer} from "./dags-runs.container";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import { DagRunItemComponent } from './components/dag-run-item/dag-run-item.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {DagsRunsService} from "../../services/dags-runs.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { FormJopModule } from "../form-jop/form-job.module";
import { CrudServiceService } from "src/app/services/crud-service.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [DagsRunsComponent, DagsRunsContainer, DagRunItemComponent],
  imports: [
    DagsRunsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTooltipModule,
    MatSlideToggleModule,
    DatePipe,
    AsyncPipe,
    NgForOf,
    MatProgressSpinnerModule,
    NgIf,
    FormJopModule,HttpClientModule
    ],
  providers: [DagsRunsService, CrudServiceService],
  bootstrap: [],
})
export class DagsRunsModule {}
