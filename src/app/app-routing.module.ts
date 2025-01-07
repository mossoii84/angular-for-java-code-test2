import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dags-runs',
  },
  {
    path: 'dags-runs',
    loadChildren: () =>
      import('./components/dags-runs/dags-runs.module').then(
        (m) => m.DagsRunsModule,
      ),
  },
  {
    path: 'dag-info/:id',
    loadChildren: () =>
      import('./components/dag-info/dag-info.module').then(
        (m) => m.DagInfoModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'dags-runs',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
