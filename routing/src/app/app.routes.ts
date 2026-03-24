import { Routes } from '@angular/router';
import { Info } from './info/info';
import { User } from './user/user';
import { Admin } from './admin/admin';
import { settingsResolver } from './data-resolvers';

export const routes: Routes = [
  {
    path: 'info',
    component: Info,
    title: 'Info Page',
    data: { analyticsId: '123' },
    children: [
      {
        path: 'user',
        loadComponent: () => User,
      },
      {
        path: 'admin',
        resolve: {
          value: settingsResolver,
        },
        loadComponent: () => Admin,
      },
    ],
  },
];
