import { Routes } from '@angular/router';
import { AboutMe } from './pages/about-me/about-me';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
        {
            path: '',
            component: AboutMe
        },
        {
            path: 'experience',
            component: Experience
        },
        {
            path: 'contact',
            component: Contact
        },
        {
            path: 'projects',
            component: Projects
        },
        {
            path: '**',
            redirectTo: ''
        }
    ];
