import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'mobula-icon',
    standalone: true,
    imports: [CommonModule],
    template: `<div [innerHTML]="safeSvgIcon"></div>`,
    styleUrl: './mobula-icon.component.scss',
})
export class MobulaIconComponent implements OnChanges {
    @Input() size = 24;
    @Input() color = '#ff00ff';
    safeSvgIcon: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {
        this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.getIcon());
    }

    ngOnChanges() {
        this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.getIcon());
    }

    getIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
          <polyline points="1.5 12 5.5 12 9.5 3 14.5 21 18.5 12 22.5 12" fill="none" stroke="${this.color}" />
        </svg>`;
    }
}



