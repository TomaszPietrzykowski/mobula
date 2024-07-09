import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'mobula-workspace-output',
    templateUrl: './workspace-output.component.html',
    styleUrl: './workspace-output.component.scss',
    standalone: true,
    imports: [RouterOutlet],
})
export class WorkspaceOutputComponent {}
