import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketPesquisaComponent } from './ticket-pesquisa.component';

const routes: Routes = [
    {
        path: '',
        component: TicketPesquisaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketPesquisaRoutingModule { }
