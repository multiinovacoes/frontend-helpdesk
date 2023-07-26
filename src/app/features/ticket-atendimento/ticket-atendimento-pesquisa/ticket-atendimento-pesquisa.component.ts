import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { TicketService } from '../../ticket/ticket.service';
import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-ticket-atendimento-pesquisa',
  templateUrl: './ticket-atendimento-pesquisa.component.html',
  styleUrls: ['./ticket-atendimento-pesquisa.component.css']
})
export class TicketAtendimentoPesquisaComponent implements OnInit {

  tickets = [];
  ticket!: any;
  @ViewChild('tabela') grid: Table;
  areas = [];
  status!: any;
  codigoCliente!: any;
  listaClientes!: any;
  user: User;

  constructor(
    private ticketService: TicketService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private title: Title,
    private confirmation: ConfirmationService,
    private routeStateService: RouteStateService
  ) {

  }

  ngOnInit() {
    this.title.setTitle('Pesquisa de tícket');
    this.status = 0;
    this.carregaClientes();
    this.codigoCliente = 0;
    this.listar();
    
  }

  
  carregaClientes(): any[]{
    this.listaClientes = [
      { label: 'Colégio Católica Timóteo', value: 1 },
      { label: 'UBEC', value: 2 },
      { label: 'Colégio Padre de Man', value: 3 },
      { label: 'Centro Educacional Católica de Brasília', value: 4 },
      { label: 'UCB', value: 5 },
      { label: 'UNILESTE', value: 6 },
      { label: 'FICR', value: 7 },
      { label: 'UNICATOLICA', value: 8 },
      { label: 'Colégio Católica de Curitiba', value: 9 },
      { label: 'Colégio Católica Joinville', value: 10 },
      { label: 'SENAI - Sistema Fiepe', value: 11 },
      { label: 'SESC PERNAMBUCO', value: 12 },
      { label: 'HOSPITAL BALBINO', value: 13 },
      { label: 'PREFEITURA DO RECIFE', value: 14 }
    ];
    return this.listaClientes;
  }

  listar() {
    this.ticketService.listarTodosAtendimentos()
      .then(tickets =>{
        this.tickets = tickets.ticketDtoList;
      }
      )
      .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisa(){

    this.ticketService.listarStatus(this.codigoCliente, this.status)
    .then(tickets =>{
      this.tickets = tickets.ticketDtoList;
    }
    )
    .catch(erro => this.errorHandler.handle(erro));
  }



  editarTicket(codigo: number) {
    this.routeStateService.add('Atendimento de Tícket',
      '/main/ticket-atendimento/ticket-atendimento-cadastro', codigo, false);
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
