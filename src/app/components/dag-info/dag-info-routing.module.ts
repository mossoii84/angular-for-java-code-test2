import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DagInfoContainer} from "./dag-info.container";

const routes: Routes = [
  {
    path: '',
    component: DagInfoContainer,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DagInfoRoutingModule {
}
