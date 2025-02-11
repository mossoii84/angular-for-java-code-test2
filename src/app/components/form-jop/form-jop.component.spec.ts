import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJopComponent } from './form-jop.component';

describe('FormJopComponent', () => {
  let component: FormJopComponent;
  let fixture: ComponentFixture<FormJopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormJopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
