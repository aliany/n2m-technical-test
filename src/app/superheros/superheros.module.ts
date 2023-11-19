import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material/material.module';
import { SuperherosRoutingModule } from './superheros-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    SuperherosRoutingModule,
    MaterialModule,
  ]
})
export class SuperherosModule { }
