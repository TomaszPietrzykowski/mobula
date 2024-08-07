import { Component, HostBinding, HostListener } from '@angular/core';
import { WorkspaceLayoutService } from '@mobula/workspace/data-access';
import { WorkspaceOutputComponent } from '../../../workspace-output/src/lib/workspace-output.component';
import { MobulaIconComponent } from '../../../../../../shared/ui/ui-components/src/lib/mobula-icon/mobula-icon.component';

@Component({
    selector: 'mobula-workspace-layout',
    templateUrl: './workspace-layout.component.html',
    styleUrl: './workspace-layout.component.scss',
    standalone: true,
    imports: [MobulaIconComponent, WorkspaceOutputComponent],
})
export class WorkspaceLayoutComponent {
    folderViewVisible = true;
    activeSideNavTabIndex: 0 | 1 | 2 | 3 | 4 = 0;
    labels = ["collections", "environment", "tests", "logs", "statistics"]

    constructor(public layoutService: WorkspaceLayoutService) { }

    @HostBinding('class.resizing')
    get isResizing(): boolean {
        return this.layoutService.resizingEvent.isResizing;
    }

    startResizing(event: MouseEvent): void {
        this.layoutService.resizingEvent = {
            isResizing: true,
            isResizingY: false,
            startingCursorX: event.clientX,
            startingCursorY: event.clientY,
            startingWidth: this.layoutService.sidenavWidth,
            startingHeight: this.layoutService.outputHeight,
        };
    }

    @HostListener('window:mousemove', ['$event'])
    updateSidenavWidth(event: MouseEvent) {
        if (!this.layoutService.resizingEvent.isResizing) {
            return;
        }

        const cursorDeltaX = event.clientX - this.layoutService.resizingEvent.startingCursorX;
        const newWidth = this.layoutService.resizingEvent.startingWidth + cursorDeltaX;
        this.layoutService.setSidenavWidth(newWidth);
    }

    @HostListener('window:mouseup')
    stopResizing() {
        this.layoutService.resizingEvent.isResizing = false;
    }

    handleSidebarClick(tabIndex: 0 | 1 | 2 | 3 | 4) {
        if (!this.folderViewVisible) {
            this.folderViewVisible = true;
            this.activeSideNavTabIndex = tabIndex;
        } else if (tabIndex === this.activeSideNavTabIndex && this.folderViewVisible) {
            this.folderViewVisible = false;
        } else if (tabIndex !== this.activeSideNavTabIndex && this.folderViewVisible) {
            this.activeSideNavTabIndex = tabIndex;
        }
    }
}   
