import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketAtendimentoCadastroComponent } from './ticket-atendimento-cadastro.component';



const routes: Routes = [
    {
        path: '',
        component: TicketAtendimentoCadastroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketAtendimentoCadastroRoutingModule { }
