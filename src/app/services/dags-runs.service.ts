import {Injectable} from "@angular/core";
import {delay, Observable, of, switchMap} from "rxjs";
import {DagsRunsType} from "../components/dags-runs/types/dags-runs";

@Injectable()
export class DagsRunsService {
  public getDagsRuns(): Observable<DagsRunsType[]> {
    const dags: DagsRunsType[] = [];
    for (let i = 0; i < 15; i++) {
      const tags = Math.random() < 0.33 ? ['tag1'] : Math.random() < 0.66 ? ['tag2'] : Math.random() < 0.5 ? ['tag1', 'tag2'] : undefined;
      dags.push({
        name: 'dag_name_' + i,
        tags: tags,
        user: 'user ' + i,
        failedRunsCount: i * 2,
        successRunsCount: i * 3,
        schedule: 'Daily',
        lastRunDate: new Date(Math.random() * 10 * 2000000000000),
        status: i % 2,
        id: i,
      })
    }

    return of(null).pipe(
      delay(50),
      switchMap(() => of(dags))
    );
  }
}
