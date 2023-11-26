import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceLayoutComponent } from './workspace-layout.component';
import { WorkspaceOutputModule } from '@mobula/workspace-output';

@NgModule({
  imports: [CommonModule, WorkspaceOutputModule],
  declarations: [WorkspaceLayoutComponent],
  exports: [WorkspaceLayoutComponent],
})
export class WorkspaceLayoutModule {}
