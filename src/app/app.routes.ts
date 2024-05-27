import { Routes } from '@angular/router';
import { Layout3Component } from './root/layout-3/layout-3.component';
import { Layout2Component } from './root/layout-2/layout-2.component';
import { LayoutComponent } from './root/layout/layout.component';
import { RootComponent } from './root/root.component';

export const routes: Routes = [
    {
        path: '1',
        component: LayoutComponent
    },
    {
        path: '2',
        component: Layout2Component
    },
    {
        path: '3',
        component: Layout3Component
    },
    {
        path: '',
        component: RootComponent
    },
    {
        path: '**',
        component: RootComponent
    },
];
