import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { workspaceShellRoutes } from './lib.routes';
import { WorkspaceLayoutModule } from '@mobula/workspace-layout';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceLayoutModule,
    RouterModule.forChild(workspaceShellRoutes),
  ],
})
export class WorkspaceShellModule {}
