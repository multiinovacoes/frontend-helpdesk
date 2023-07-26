import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketPesquisaComponent } from './ticket-pesquisa/ticket-pesquisa.component';
import { TicketCadastroComponent } from './ticket-cadastro/ticket-cadastro.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'ticket-pesquisa'
    },
    {
        path: 'ticket-pesquisa',
        component: TicketPesquisaComponent,
        loadChildren: () => import('src/app/features/ticket/ticket-pesquisa/ticket-pesquisa.module').
        then(m => m.TicketPesquisaModule)
    },
    {
      path: 'ticket-cadastro',
      component: TicketCadastroComponent,
      loadChildren: () => import('src/app/features/ticket/ticket-cadastro/ticket-cadastro.module').
      then(m => m.TicketCadastroModule)
  }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TicketRoutingModule { }