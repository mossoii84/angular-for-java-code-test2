import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobsRunsType } from '../common-types/jobs-runs-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor( private http: HttpClient) {}


  getJobs(): Observable<any> {
      return this.http.get<any>('http://localhost:4200/jobs/get');
  }
  




}
