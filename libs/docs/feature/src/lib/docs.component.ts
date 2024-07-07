import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-docs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './docs.component.html',
    styleUrl: './docs.component.scss',
})
export class DocsComponent {}
