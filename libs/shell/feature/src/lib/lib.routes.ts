import { Route } from '@angular/router';
import { LayoutComponent } from '@mobula/layout';

export const appShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@mobula/home')).HomeModule,
      },
    ],
  },
];
