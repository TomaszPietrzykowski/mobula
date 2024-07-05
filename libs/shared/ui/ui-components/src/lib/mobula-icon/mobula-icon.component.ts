import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'mobula-icon',
    standalone: true,
    imports: [CommonModule],
    template: `<div style="display: flex; align-items: center;" [innerHTML]="safeSvgIcon"></div>`,
    styleUrl: './mobula-icon.component.scss',
})
export class MobulaIconComponent implements OnChanges {
    @Input() size = 24;
    @Input() color = '#ff00ff';
    @Input() icon = 'active';
    safeSvgIcon: SafeHtml;

    constructor(private sanitizer: DomSanitizer) {
        this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.getIcon());
    }

    ngOnChanges() {
        this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(this.getIcon());
    }

    getIcon(): string {
        switch (this.icon) {
            case 'active':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polyline points="1.5 12 5.5 12 9.5 3 14.5 21 18.5 12 22.5 12" fill="none" stroke="${this.color}" /></svg>`;

            case 'airplay':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polyline points="6.5 18 2.5 18 2.5 4 21.5 4 21.5 18 17.5 18" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <polygon points="8 20 16 20 12 14.1 8 20" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'astronaut':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <circle cx="12" cy="12" r="2" fill="none" stroke="${this.color}"/>
                        <rect x="4" y="18" width="16" height="3" fill="none" stroke="${this.color}"/>
                        <path d="M5.29,18A9,9,0,0,1,18.36,5.64L11,10.25" fill="none" stroke="${this.color}"/>
                        <polyline points="18.5 18 18.53 15.69 11.34 13.89" fill="none" stroke="${this.color}"/>
                        <path d="M18.53,15.69a7.51,7.51,0,0,0-1.47-9.23" fill="none" stroke="${this.color}"/></svg>`;

            case 'alert':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <line x1="12" y1="9.5" x2="12" y2="15" fill="none" stroke="${this.color}"/>
                        <line x1="12" y1="17.5" x2="12" y2="16.5" fill="none" stroke="${this.color}"/>
                        <polygon points="12 3 22 20 2 20 12 3" fill="none" stroke="${this.color}"/></svg>`;

            case 'cast':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <path d="M6,19.5a4.2,4.2,0,0,0-4-4.4" fill="none" stroke="${this.color}"/>
                        <path d="M9.1,19.5A7.3,7.3,0,0,0,2,12" fill="none" stroke="${this.color}"/>
                        <line x1="3" y1="19" x2="2" y2="19" fill="none" stroke="${this.color}"/>
                        <polyline points="2.5 9.5 2.5 5 21.5 5 21.5 19 11.5 19" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'cd':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="${this.color}"/>
                        <rect x="10" y="10" width="4" height="4" rx="2" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'chat-heart':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                <path d="M6.1,18.76A8.18,8.18,0,0,1,2,11.89c0-4.7,4.47-8.51,10-8.51s10,3.81,10,8.51-4.48,8.5-10,8.5a11.67,11.67,0,0,1-1.89-.15L5.66,22.49Z" fill="none" stroke="${this.color}"/>
                <path d="M12,10.75l-.44-.39a1.5,1.5,0,0,0-2.12,2.12L12,15.08l2.56-2.6a1.5,1.5,0,0,0-2.12-2.12Z" fill="none" stroke="${this.color}"/></svg>`;

            case 'chat':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                <path d="M6,18.28a8.19,8.19,0,0,1-4-6.94C2.08,6.64,6.62,2.91,12.14,3S22.07,7,22,11.66,17.38,20.09,11.86,20A11.63,11.63,0,0,1,10,19.82L5.5,22Z" fill="none" stroke="${this.color}"/></svg>`;

            case 'check':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                <polyline points="4 11.5 10 17.5 21 6.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'chart-1':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <rect x="2" y="13" width="4" height="8" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <rect x="10" y="3" width="4" height="18" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <rect x="18" y="8" width="4" height="13" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'folder':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polygon points="21.5 6.5 21.5 19.5 2.5 19.5 2.5 4 8 4 10.5 6.5 21.5 6.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'folder-open':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polyline points="20.5 19.5 1.5 19.5 1.5 4 7 4 9.5 6.5 20.5 6.5 20.5 10" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <polyline points="1.5 19.5 4 10 23 10 20.5 19.5 20 19.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'folder-edit':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polyline points="10.5 7.5 9 7.5 6.5 5 1 5 1 20.5 20 20.5 20 11.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <polygon points="9.5 15.5 10 12.5 20.5 2 21.5 2 23 3.5 23 4.5 12.5 15 9.5 15.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <line x1="18.5" y1="3.5" x2="21.5" y2="6.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'folder-add':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polygon points="21.5 6.5 21.5 19.5 2.5 19.5 2.5 4 8 4 10.5 6.5 21.5 6.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <line x1="9.5" y1="13" x2="14.5" y2="13" fill="none" stroke="${this.color}"/>
                        <line x1="12" y1="10.5" x2="12" y2="15.5" fill="none" stroke="${this.color}"/></svg>`;

            case 'folder-x':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polygon points="21.5 6.5 21.5 19.5 2.5 19.5 2.5 4 8 4 10.5 6.5 21.5 6.5" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <line x1="10" y1="15" x2="14" y2="11" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <line x1="10" y1="11" x2="14" y2="15" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'align-center':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <line x1="3" y1="14" x2="21" y2="14" fill="#fff" stroke="${this.color}" stroke-miterlimit="10"/>
                        <line x1="6.5" y1="10" x2="17.5" y2="10" fill="#fff" stroke="${this.color}" stroke-miterlimit="10"/>
                        <line x1="3" y1="6" x2="21" y2="6" fill="#fff" stroke="${this.color}" stroke-miterlimit="10"/>
                        <line x1="6.5" y1="18" x2="17.5" y2="18" fill="#fff" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'file':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <path d="M14,2H4V22H20V8Z" fill="none" stroke="${this.color}" stroke-miterlimit="10"/>
                        <polyline points="14 2 14 8 20 8" fill="none" stroke="${this.color}" stroke-miterlimit="10"/></svg>`;

            case 'file-edit':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <path d="M18,16.5V22H2V8L8,2H18V3.5" fill="none" stroke="${this.color}" stroke-miterlimit="10" />
                        <polyline points="8 2 8 8 2 8" fill="none" stroke="${this.color}" stroke-miterlimit="10" />
                        <polygon points="8.5 18.5 9 15.5 19.5 5 20.5 5 22 6.5 22 7.5 11.5 18 8.5 18.5" fill="none" stroke="${this.color}"
                            stroke-miterlimit="10" />
                        <line x1="17.5" y1="6.5" x2="20.5" y2="9.5" fill="none" stroke="${this.color}" stroke-miterlimit="10" /></svg>`;

            case 'globe':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="${this.color}"/>
                        <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="${this.color}"/><line x1="2" y1="12" x2="22" y2="12" fill="none" stroke="${this.color}"/>
                        <path d="M20,18a19.3,19.3,0,0,0-8-1.5A19.3,19.3,0,0,0,4,18" fill="none" stroke="${this.color}"/>
                        <path d="M4,6a19.3,19.3,0,0,0,8,1.5A19.3,19.3,0,0,0,20,6" fill="none" stroke="${this.color}"/></svg>`;

            case 'bug':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <path d="M10,3h4l2,2V8l1.5,1v8L12,21,6.5,17V9L8,8V5ZM2.5,13h4" fill="none" stroke="${this.color}"/>
                        <polyline points="2.5 7 4.5 9 6.5 9" fill="none" stroke="${this.color}"/>
                        <polyline points="21.5 7 19.5 9 17.5 9" fill="none" stroke="${this.color}"/>
                        <polyline points="2.5 19 4.5 17 6.5 17" fill="none" stroke="${this.color}"/>
                        <polyline points="17.5 17 19.5 17 21.5 19" fill="none" stroke="${this.color}"/>
                        <path d="M17.5,13h4" fill="none" stroke="${this.color}"/></svg>`;

            case 'clock':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polyline points="11.5 6 11.5 12.5 16.5 15" fill="none" stroke="${this.color}"/>
                        <circle cx="12" cy="12" r="10" fill="none" stroke="${this.color}"/></svg>`;

            case 'user':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                <circle cx="12" cy="7.5" r="4" fill="none" stroke="${this.color}"/>
                <polyline points="4.5 21 4.5 17 7.5 14 12 15.5 16.5 14 19.5 17 19.5 21" fill="none" stroke="${this.color}"/></svg>`;

            default:
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${this.size}" height="${this.size}">
                        <polyline points="1.5 12 5.5 12 9.5 3 14.5 21 18.5 12 22.5 12" fill="none" stroke="${this.color}" />
                        </svg>`;
        }

    }
}




