import { Routes } from "@angular/router";


export const routes: Routes = [
     {
          path: '',
          loadComponent: () => import('./components/component-1/component-1').then(com => com.Component1)
     },
     {
          path: 'compoenent1',
          loadComponent: () => import('./components/component-1/component-1').then(com => com.Component1)
     },
     {
          path: 'component2',
          loadComponent: () => import('./components/component-2/component-2').then(com => com.Component2)
     },
     {
          path: 'component3',
          loadComponent: () => import('./components/component-3/component-3').then(com => com.Component3)
     },
     {
          path: 'component4',
          loadComponent: () => import('./components/component-4/component-4').then(com => com.Component4)
     }, 
     {
          path: 'component5',
          loadComponent: () => import('./components/component-5/component-5').then(com => com.Component5)
     }
]