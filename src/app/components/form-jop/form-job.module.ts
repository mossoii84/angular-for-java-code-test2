import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormJopComponent } from './form-jop.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormJopComponent], // Регистрируем компонент
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [FormJopComponent] // Экспортируем, чтобы можно было использовать в других модулях
})
export class FormJopModule {}
