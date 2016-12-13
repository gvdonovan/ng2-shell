import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

//Layouts
import { FullLayoutComponent, 
         SimpleLayoutComponent }    from './layouts/index';

import { AuthGuard }                from './_guards/auth.guard';

export const routes: Routes = [
    {
        path: '',  
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'admin',
                loadChildren: 'app/admin/admin.module#AdminModule',
                canActivate: [AuthGuard]
            },
        ]   
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: 'app/pages/pages.module#PagesModule',
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [
        AuthGuard    
    ]
})
export class AppRoutingModule {}
