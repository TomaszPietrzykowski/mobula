import { Route } from '@angular/router';
import { AuthGuard } from '@mobula/auth/data-access';
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
                path: 'docs',
                loadComponent: async () =>
                    (await import('@mobula/docs')).DocsComponent,
            },
            {
                path: 'contact',
                loadChildren: async () =>
                    (await import('@mobula/contact')).ContactModule,
            },
            {
                path: 'login',
                loadComponent: async () =>
                    (await import('@mobula/login')).LoginComponent,
            },
            {
                path: 'register',
                loadComponent: async () =>
                    (await import('@mobula/register')).RegisterComponent,
            },
            {
                path: 'profile',
                canActivate: [AuthGuard],
                loadComponent: async () =>
                    (await import('@mobula/user/profile')).UserProfileComponent,
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    },
];
