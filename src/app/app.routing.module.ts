import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [
        {
            path: 'dashboard',
            loadChildren: () => import('src/app/features/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'ticket',
            loadChildren: () => import('src/app/features/ticket/ticket.module').then(m => m.TicketModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'ticket-atendimento',
            loadChildren: () => import('src/app/features/ticket-atendimento/ticket-atendimento.module').then(m => m.TicketAtendimentoModule),
            canActivate: [AuthGuard]
        }
    ]
    },
    {
        path: 'error',
        component: ErrorComponent,
        //loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
