import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketCadastroComponent } from './ticket-cadastro.component';


const routes: Routes = [
    {
        path: '',
        component: TicketCadastroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketCadastroRoutingModule { }
