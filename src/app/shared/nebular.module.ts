import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbLayoutModule, NbFormFieldModule, NbInputModule, NbCardModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    NbLayoutModule,
    NbFormFieldModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
  ],
  exports: [
    NbLayoutModule,
    NbFormFieldModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class NebularModule { }
