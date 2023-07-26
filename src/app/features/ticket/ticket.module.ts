import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { TicketRoutingModule } from './ticket.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TicketRoutingModule,
    AppCommonModule

  ]
})
export class TicketModule { }