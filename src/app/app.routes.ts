import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'modules',
    pathMatch: 'full',
  },
  {
    path: 'modules',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
  },
  { path: 'notfound', component: PageNotFoundComponent, outlet: 'notfound' },
  {
    path: '**',
    redirectTo: '/(notfound:notfound)'
  },
];
