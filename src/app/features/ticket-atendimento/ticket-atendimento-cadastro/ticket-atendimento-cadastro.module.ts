import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketAtendimentoCadastroRoutingModule } from './ticket-atendimento-cadastro.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { TicketAtendimentoCadastroComponent } from './ticket-atendimento-cadastro.component';



@NgModule({
  imports: [
    CommonModule,
    TicketAtendimentoCadastroRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    TicketAtendimentoCadastroComponent
  ]
})
export class TicketAtendimentoCadastroModule { }
