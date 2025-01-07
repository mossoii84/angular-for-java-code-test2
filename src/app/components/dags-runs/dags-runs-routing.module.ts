import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DagsRunsContainer} from "./dags-runs.container";

const routes: Routes = [
  {
    path: '',
    component: DagsRunsContainer,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DagsRunsRoutingModule {
}
