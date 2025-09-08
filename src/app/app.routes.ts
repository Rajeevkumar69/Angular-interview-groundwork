import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        // canActivate:[AuthGuard],
        loadComponent: () => import('./components/component-1/component-1').then(com => com.Component1)
    },
    {
        path: 'form',
        loadComponent: () => import('./components/component-2/component-2').then(com => com.Component2)
    },
    {
        path: 'component-3',
        loadComponent: () => import('./components/component-3/component-3').then(com => com.Component3)
    },
    {
        path: 'component-4',
        loadComponent: () => import('./components/component-4/component-4').then(com => com.Component4)
    },
    {
        path: 'component-5',
        loadComponent: () => import('./components/component-5/components-5').then(com => com.Components5)
    },
    {
        path:'component-6',
        loadComponent: () => import('./components/component-6/components-6').then(com => com.Components6)
    },
    {
        path:'component-7',
        loadComponent:()=> import('./components/component-7/component-7').then(com => com.Component7)
    },
    {
        path:'component-8',
        loadComponent:()=> import('./components/component-8/component-8').then(com =>com.Component8)
    }

];
