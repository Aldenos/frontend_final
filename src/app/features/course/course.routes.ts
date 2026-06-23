import { Routes } from '@angular/router';

export const COURSE_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./collections/collection-list/collection-list.component').then(m => m.CollectionListComponent)
	}
];

