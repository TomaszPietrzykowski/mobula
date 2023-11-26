import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceOutputComponent } from './workspace-output.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WorkspaceOutputComponent],
  exports: [WorkspaceOutputComponent],
})
export class WorkspaceOutputModule {}
