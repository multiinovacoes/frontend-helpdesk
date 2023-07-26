import { User } from 'src/app/core/models/user.model';
import { SessionService } from 'src/app/core/services/session.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/core/models/ticket.model';
import { ComplementoTicket } from 'src/app/core/models/complemento-ticket.model';


@Injectable({
  providedIn: 'root',
})
export class TicketService {

  ticketUrl: string;
  complementoTicketUrl: string;
  user: User;

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {
    this.ticketUrl = `${environment.apiUrl}/ticket`;
    this.complementoTicketUrl = `${environment.apiUrl}/complemento-ticket`;

  }


  listar(): Promise<any> {
    let params = new HttpParams()
    this.user = this.sessionService.getItem("currentUser");
    params = params.set('codigoCliente', this.user.codigoCliente.toString());
    return this.http.get<any>(`${this.ticketUrl}/listar?`, {params})
      .toPromise()
      .then(res => <any>res)
      .then(data => {
        return data;
      });
  }

  listarStatus(codigoCliente: number, status: number): Promise<any> {
    let params = new HttpParams()
    params = params.set('codigoCliente', codigoCliente.toString());
    params = params.set('status', status.toString());
    return this.http.get<any>(`${this.ticketUrl}/listar-status?`, {params})
      .toPromise()
      .then(res => <any>res)
      .then(data => {
        return data;
      });
  }

  listarTodosAtendimentos(): Promise<any> {
    return this.http.get<any>(`${this.ticketUrl}/listar-todos?`)
      .toPromise()
      .then(res => <any>res)
      .then(data => {
        return data;
      });
  }

  listarComplementoTicket(codigoTicket: any): Promise<any> {
    let params = new HttpParams();
    params = params.set("codigoTicket", codigoTicket);
    return this.http
      .get<any>(`${this.complementoTicketUrl}/listar?`, { params })
      .toPromise()
      .then((res) => <any>res)
      .then((data) => {
        return data.complementoTicketDtoList;
      });
  }

  editar(codigo: number): Promise<any> {
    return this.http.get<any>(`${this.ticketUrl}/${codigo}`)
      .toPromise()
      .then(res => <any>res)
      .then(data => {
        return data;
      });

  }

  visualizarComplementoTicket(codigo: number): Promise<any> {
    return this.http.get<any>(`${this.complementoTicketUrl}/${codigo}`)
      .toPromise()
      .then(res => <any>res)
      .then(data => {
        return data;
      });

  }

  atendimentoTicket(codigo: number): Promise<any> {
    return this.http.get<any>(`${this.ticketUrl}/atendimento-ticket/${codigo}`)
      .toPromise()
      .then(res => <any>res)
      .then(data => {
        return data;
      });

  }

  salvarComplemento(complementoTicket: ComplementoTicket): Promise<Ticket> {
    return this.http.post<Ticket>(`${this.complementoTicketUrl}`, complementoTicket)
      .toPromise() .then((res) => <any>res)
      .then((data) => {
        return data.complementoTicketDtoList;
      });
  }

  
  responderComplemento(complementoTicket: ComplementoTicket): Promise<Ticket> {
    return this.http.post<Ticket>(`${this.complementoTicketUrl}/responder-complemento-ticket`, complementoTicket)
      .toPromise() .then((res) => <any>res)
      .then((data) => {
        return data.complementoTicketDtoList;
      });
  }


  excluirComplementoTicket(codigo: number): Promise<void> {
    return this.http
      .delete(`${this.complementoTicketUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }


  atualizar(ticket: Ticket): Promise<Ticket> {
    return this.http.put<Ticket>(`${this.ticketUrl}/${ticket.id}`, ticket)
      .toPromise()
      .then(response => {
        const assuntoAlterado = response;
        return assuntoAlterado;
      });
  }

  adicionar(ticket: Ticket): Promise<Ticket> {
    this.user = this.sessionService.getItem("currentUser");
    ticket.codigoUsuario = this.user.id;
    ticket.codigoCliente = this.user.codigoCliente;
    return this.http.post<Ticket>(`${this.ticketUrl}`, ticket)
      .toPromise().then();
  }

  finalizar(ticket: Ticket): Promise<Ticket> {
    return this.http.post<Ticket>(`${this.ticketUrl}/finalizar`, ticket)
      .toPromise().then();
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.ticketUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  


}
