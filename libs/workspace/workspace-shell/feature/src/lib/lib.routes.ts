import { Route } from '@angular/router';
import { WorkspaceLayoutComponent } from '@mobula/workspace-layout';

export const workspaceShellRoutes: Route[] = [
  {
    path: '',
    component: WorkspaceLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@mobula/desktop')).DesktopModule,
      },
    ],
  },
];
