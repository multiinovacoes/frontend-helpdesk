import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { TicketService } from '../ticket.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-ticket-pesquisa',
  templateUrl: './ticket-pesquisa.component.html',
  styleUrls: ['./ticket-pesquisa.component.css']
})
export class TicketPesquisaComponent implements OnInit {

  tickets = [];
  ticket!: any;
  @ViewChild('tabela') grid: Table;
  areas = [];
  status: any;
  user: User;

  constructor(
    private ticketService: TicketService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private sessionService: SessionService,
    private title: Title,
    private confirmation: ConfirmationService,
    private routeStateService: RouteStateService
  ) {

  }

  ngOnInit() {
    this.title.setTitle('Pesquisa de tícket');
    this.user = this.sessionService.getItem("currentUser");
    this.status = 0;
    this.listar();
  }

  listar() {
    this.ticketService.listar()
      .then(tickets =>{
        this.tickets = tickets.ticketDtoList;
      }
      )
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisa(){
    this.ticketService.listarStatus(this.user.codigoCliente, this.status)
    .then(tickets =>{
      this.tickets = tickets.ticketDtoList;
    }
    )
    .catch(erro => this.errorHandler.handle(erro));
  }

  editarTicket(codigo: number) {
    this.routeStateService.add('Edição de Tícket',
      '/main/ticket/ticket-cadastro', codigo, false);
  }

  novoTicket() {
    this.routeStateService.add('Novo Tícket',
      '/main/ticket/ticket-cadastro', 0, false);
  }


  excluir(ticket: any) {
    this.ticketService.excluir(ticket.id)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Tícket excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  confirmarExclusao(ticket: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(ticket);
      }
    });
  }




}
