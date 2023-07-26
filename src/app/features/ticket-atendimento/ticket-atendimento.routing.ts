import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketAtendimentoPesquisaComponent } from './ticket-atendimento-pesquisa/ticket-atendimento-pesquisa.component';
import { TicketAtendimentoCadastroComponent } from './ticket-atendimento-cadastro/ticket-atendimento-cadastro.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'ticket-atendimento-pesquisa'
    },
    {
        path: 'ticket-atendimento-pesquisa',
        component: TicketAtendimentoPesquisaComponent,
        loadChildren: () => import('src/app/features/ticket-atendimento/ticket-atendimento-pesquisa/ticket-atendimento-pesquisa.module').
        then(m => m.TicketAtendimentoPesquisaModule)
    },
    {
      path: 'ticket-atendimento-cadastro',
      component: TicketAtendimentoCadastroComponent,
      loadChildren: () => import('src/app/features/ticket-atendimento/ticket-atendimento-cadastro/ticket-atendimento-cadastro.module').
      then(m => m.TicketAtendimentoCadastroModule)
  }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TicketAtendimentoRoutingModule { }