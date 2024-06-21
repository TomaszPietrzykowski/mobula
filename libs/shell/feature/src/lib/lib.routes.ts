import { Route } from '@angular/router';
import { LayoutComponent } from '@mobula/layout';

export const appShellRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: async () =>
                    (await import('@mobula/home')).HomeModule,
            },
            {
                path: 'workspace',
                loadChildren: async () =>
                    (await import('@mobula/workspace-shell'))
                        .WorkspaceShellModule,
            },
            {
                path: 'contact',
                loadChildren: async () =>
                    (await import('@mobula/contact')).ContactModule,
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    },
];
