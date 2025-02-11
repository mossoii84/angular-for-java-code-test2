import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { CrudServiceService } from 'src/app/services/crud-service.service';


@Component({
  selector: 'app-form-jop',
  templateUrl: './form-jop.component.html',
  styleUrl: './form-jop.component.scss'
})
export class FormJopComponent implements OnInit{
  store = inject(Store);
  crudServiceService = inject(CrudServiceService);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {


    this.crudServiceService.getJobs()
       .pipe(takeUntil(this.destroy$))
       .subscribe(data => console.log('data---', data));

  }



  //from parent
  isVisible = signal(false);
  openDialogAddJobs() {
    this.isVisible.update(value => !value);
    this.profileForm.reset();
  }

  onAdd(form: FormGroup) {
    console.log("my form-", form.value)
    form.reset();
    this.isVisible.update(value => !value);
  }




   //form 
   profileForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(256)]),
    discription: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(256)]),
    schedule: new FormControl<any>('',[Validators.required]),
    tegs: new FormControl('', [Validators.required]),
  });

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
