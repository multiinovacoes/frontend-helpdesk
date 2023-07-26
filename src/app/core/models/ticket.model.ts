export class Ticket {
  id: number;
  codigoCliente: number;
  codigoTipo: number;
  codigoPrioridade: number;
  codigoUsuario: number;
  numeroTicket: number;
  assunto: string;
  descricao: string;
  descricaoSolucao: string;
  dataAbertura: any;
  dataInicioAnalise: any;
  dataFechamento: any;
  status: number;
  listaAnexoDto: any[] = [];
  listaAnexo: any;
  listaComplementoTicketDto: any;
  ticketDto: Ticket;
  anoTicketGerado: number;
  descricaoCliente: string;
  descricaoUsuario: string;
}


