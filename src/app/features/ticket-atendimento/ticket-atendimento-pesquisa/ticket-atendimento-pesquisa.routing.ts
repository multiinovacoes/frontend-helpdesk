import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketAtendimentoPesquisaComponent } from './ticket-atendimento-pesquisa.component';


const routes: Routes = [
    {
        path: '',
        component: TicketAtendimentoPesquisaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketAtendimentoPesquisaRoutingModule { }
