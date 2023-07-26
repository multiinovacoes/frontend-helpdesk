import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { TicketCadastroRoutingModule } from './ticket-cadastro.routing';
import { TicketCadastroComponent } from './ticket-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    TicketCadastroRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    TicketCadastroComponent
  ]
})
export class TicketCadastroModule { }