import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WorkspaceLayoutService {
    readonly sidenavMinWidth = 120;
    readonly outputMinHeight = 200;

    readonly sidenavMaxWidth = window.innerWidth - 300;
    readonly outputMaxHeight = window.innerHeight - 100;

    resizingEvent = {
        isResizing: false,
        isResizingY: false,

        startingCursorX: 0,
        startingCursorY: 0,

        startingWidth: 0,
        startingHeight: 0,
    };

    get sidenavWidth(): number {
        return parseInt(
            getComputedStyle(document.body).getPropertyValue('--sidenav-width'),
            10
        );
    }
    get outputHeight(): number {
        return parseInt(
            getComputedStyle(document.body).getPropertyValue('--output-height'),
            10
        );
    }

    /**
     * Sets the width of the sidenav to given number (clamped between a min and a max) as pixels.
     */
    setSidenavWidth(width: number) {
        const clampedWidth = Math.min(
            Math.max(width, this.sidenavMinWidth),
            this.sidenavMaxWidth
        );

        document.body.style.setProperty('--sidenav-width', `${clampedWidth}px`);
    }
    /**
     * Sets the height of the request browser window to given number (clamped between a min and a max) as pixels.
     */
    setOutputHeight(height: number) {
        const clampedWidth = Math.min(
            Math.max(height, this.outputMinHeight),
            this.outputMaxHeight
        );

        document.body.style.setProperty('--output-height', `${clampedWidth}px`);
    }
}
