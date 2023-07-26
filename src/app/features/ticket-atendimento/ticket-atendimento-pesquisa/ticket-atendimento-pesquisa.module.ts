import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketAtendimentoPesquisaRoutingModule } from './ticket-atendimento-pesquisa.routing';
import { TicketAtendimentoPesquisaComponent } from './ticket-atendimento-pesquisa.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';



@NgModule({
    imports: [
      CommonModule,
      TicketAtendimentoPesquisaRoutingModule,
      AppCommonModule,
      HeaderBreadCrumbModule
    ],
    declarations: [
      TicketAtendimentoPesquisaComponent
    ]
  })
export class TicketAtendimentoPesquisaModule { }
