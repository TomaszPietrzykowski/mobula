import { Component, HostBinding, HostListener } from '@angular/core';
import { WorkspaceLayoutService } from '@mobula/workspace/data-access';

@Component({
    selector: 'mobula-workspace-layout',
    templateUrl: './workspace-layout.component.html',
    styleUrl: './workspace-layout.component.scss',
})
export class WorkspaceLayoutComponent {
    folderViewVisible = true;

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

    toggleFolderView() {
        this.folderViewVisible = !this.folderViewVisible;
    }
}
