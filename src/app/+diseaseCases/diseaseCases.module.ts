import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DiseaseCasesRoutingModule, routedDiseaseCasesComponents} from "./diseaseCases.routing";

import { DiseaseCasesListComponent } from "./diseaseCases-list.component";
import { DiseaseCasesItemComponent } from "./diseaseCases-item.component";
import { DiseaseCasesEditComponent } from "./diseaseCases-edit.component";
import { DiseaseCasesNewComponent } from "./diseaseCases-new.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      DiseaseCasesRoutingModule
    ],
    declarations: [
      DiseaseCasesListComponent,
      DiseaseCasesItemComponent,
      DiseaseCasesEditComponent,
      DiseaseCasesNewComponent,
      routedDiseaseCasesComponents
    ],
    providers: [
  ]
})
export class DiseaseCasesModule {}
