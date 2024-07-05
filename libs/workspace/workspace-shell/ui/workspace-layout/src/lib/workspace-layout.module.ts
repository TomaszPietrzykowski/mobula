import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceLayoutComponent } from './workspace-layout.component';
import { WorkspaceOutputModule } from '@mobula/workspace-output';
import { MobulaIconComponent } from '@mobula/ui-components';

@NgModule({
    imports: [CommonModule, WorkspaceOutputModule, MobulaIconComponent],
    declarations: [WorkspaceLayoutComponent],
    exports: [WorkspaceLayoutComponent],
})
export class WorkspaceLayoutModule { }
