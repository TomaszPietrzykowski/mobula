import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { workspaceShellRoutes } from './lib.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(workspaceShellRoutes),
],
})
export class WorkspaceShellModule {}
