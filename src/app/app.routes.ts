import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/about-me/about-me')
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/experience/experience')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact')
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
