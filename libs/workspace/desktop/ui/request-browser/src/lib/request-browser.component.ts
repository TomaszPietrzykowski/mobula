import { Component, HostBinding, HostListener, inject } from '@angular/core';
import { WorkspaceLayoutService } from '@mobula/workspace/data-access';

@Component({
    selector: 'mobula-request-browser',
    templateUrl: './request-browser.component.html',
    styleUrl: './request-browser.component.scss',
})
export class RequestBrowserComponent {
    layoutService = inject(WorkspaceLayoutService);

    @HostBinding('class.resizing-y')
    get isResizingY(): boolean {
        return this.layoutService.resizingEvent.isResizingY;
    }

    @HostListener('window:mousemove', ['$event'])
    updateSidenavWidth(event: MouseEvent) {
        if (!this.layoutService.resizingEvent.isResizingY) {
            return;
        }
        const cursorDeltaY =
            event.clientY -
            this.layoutService.resizingEvent.startingCursorY;
        const newHeight =
            this.layoutService.resizingEvent.startingHeight + cursorDeltaY;
        this.layoutService.setOutputHeight(newHeight);
    }

    startResizingY(event: MouseEvent): void {
        this.layoutService.resizingEvent = {
            isResizing: false,
            isResizingY: true,
            startingCursorX: event.clientX,
            startingCursorY: event.clientY,
            startingWidth: this.layoutService.sidenavWidth,
            startingHeight: this.layoutService.outputHeight,
        };
    }

    @HostListener('window:mouseup')
    stopResizing() {
        this.layoutService.resizingEvent.isResizingY = false;
    }
}
