import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { TicketPesquisaComponent } from './ticket-pesquisa.component';
import { TicketPesquisaRoutingModule } from './ticket-pesquisa.routing';

@NgModule({
  imports: [
    CommonModule,
    TicketPesquisaRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    TicketPesquisaComponent
  ]
})
export class TicketPesquisaModule { }