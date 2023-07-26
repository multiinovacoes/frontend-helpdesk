import { Component, OnInit, ViewChild } from '@angular/core';
import { Anexo } from 'src/app/core/models/anexo.model';
import { Ticket } from 'src/app/core/models/ticket.model';
import { TicketService } from '../../ticket/ticket.service';
import { AnexoService } from '../../anexo/anexo.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { NgForm } from '@angular/forms';
import { ComplementoTicket } from 'src/app/core/models/complemento-ticket.model';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-ticket-atendimento-cadastro',
  templateUrl: './ticket-atendimento-cadastro.component.html',
  styleUrls: ['./ticket-atendimento-cadastro.component.css']
})
export class TicketAtendimentoCadastroComponent implements OnInit {

  listaTicket!: any;

  listaPrioridade!: any;

  listaStatus!: any;

  ticket = new Ticket();

  user: User;



  fileName = "";
  uploadedFiles: any[] = [];
  fileSelected?: File;
  base64: string = "Base64...";
  anexo = new Anexo();
  anexos!: any;
  complementosTicket!: any;
  idAnexoSelecao: any;
  @ViewChild('fileUpload') fileUpload: any;
  displayModalComplemento: boolean;
  displayModalFinalizarTicket: boolean;
  descricaoComplemento: string;
  complementoTicket = new ComplementoTicket();

  constructor(
    private ticketService: TicketService,
    private anexoService: AnexoService,
    private loaderService: LoaderService,
    private messageService: MessageService,
    private sessionService: SessionService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private routeStateService: RouteStateService
  ) { }

  ngOnInit(): void {
    this.carregaTipoTicket();
    this.carregaPrioridade();
    this.carregaStatus();

    this.user = this.sessionService.getItem("currentUser");

    var routeState = this.routeStateService.getCurrent();
    if (routeState.data > 0) {
      this.editarTicket(routeState.data);
    }else{
      this.ticket.status = 1;
      this.ticket.id = null;
    }
  
  }


  carregaTipoTicket(): any[]{
    this.listaTicket = [
      { label: 'Problema', value: 1 },
      { label: 'Nova Funcionalidade', value: 2 },
      { label: 'Solicitação de Acesso', value: 3 }
    ];
    return this.listaTicket;
  }

  carregaPrioridade(): any[]{
    this.listaPrioridade = [
      { label: 'Baixa', value: 1 },
      { label: 'Média', value: 2 },
      { label: 'Alta', value: 3 }
    ];
    return this.listaPrioridade;
  }  

  carregaStatus(): any[]{
    this.listaStatus = [
      { label: 'Aberto', value: 1 },
      { label: 'Em atendimento', value: 2 },
      { label: 'Aguardando complemento', value: 3 },
      { label: 'Finalizado', value: 4 },
      { label: 'Cancelado', value: 5 }
    ];
    return this.listaStatus;
  }

  carregaArquivo(event: { target: { files: File[] }; files: any }) {
    for (let index = 0; index < event.files.length; index++) {
      const file: File = event.files[index];
      if (file) {
        this.convertFileToBase64(file, index, event);
      }
    }
  }

  editarTicket(codigo: number) {
    return this.ticketService.atendimentoTicket(codigo)
    .then((ticket) => {
      this.ticket = ticket.ticketDto;
      this.anexos = this.ticket.listaAnexo;
      this.anexo.codigoTicket = this.ticket.id;
      this.complementosTicket = this.ticket.listaComplementoTicketDto;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  showComplementoTicket() {
    this.complementoTicket = new ComplementoTicket();
    this.complementoTicket.codigoUsuarioResposta = null;
    this.complementoTicket.id = null;
    this.displayModalComplemento = true;
  }

  showFinalizarTicket() {
    this.displayModalFinalizarTicket = true;
  }

  onCloseFinalizar(){
    this.displayModalFinalizarTicket = false;
  }

  get editando() {
    return Boolean(this.ticket.id)
  }

  excluirAnexo(codigoAnexo: number) {
    this.confirmarExclusao(codigoAnexo);
  }

  confirmarExclusao(codigoAnexo: number) {
    this.confirmation.confirm({
      message: "Tem certeza que deseja excluir este anexo?",
      accept: () => {
        this.excluir(codigoAnexo);
      },
    });
  }

  excluir(codigoAnexo: number) {
    this.loaderService.show();
    this.anexoService
      .excluir(codigoAnexo)
      .then(() => {
        this.messageService.add({
          severity: "success",
          detail: "Anexo excluído com sucesso!",
        });
      })
      .then((response) => {
        this.loaderService.hide();
        this.carregarAnexos(this.ticket.id);
      })
      .catch((erro) => {
        this.loaderService.hide();
        this.errorHandler.handle(erro);
      });
  }

  carregarAnexos(codigoTicket: number) {
    this.loaderService.show();
    if (codigoTicket !== null){
      this.anexoService.listar(codigoTicket).then((anexos) => {
        this.anexos = anexos;
      }).then(() => {
        this.loaderService.hide();
      });
    }else{
        this.loaderService.hide();
    }
  }

  carregarComplementooTicket(codigoTicket: number) {
    this.loaderService.show();
      this.ticketService.listarComplementoTicket(codigoTicket).then((complementosTickets) => {
        this.complementosTicket = complementosTickets;
      }).then(() => {
        this.loaderService.hide();
      });
  }

  
  clear(){
    this.fileUpload.clear();
  }
  
  salvar(form: NgForm) {
    this.loaderService.show();
    this.ticket.listaAnexoDto = this.anexo.listaAnexoDto;
    this.ticketService.adicionar(this.ticket)
      .then(response => {
        this.ticket = response.ticketDto;
        this.ticket.listaAnexoDto = null;
        this.anexos = this.ticket.listaAnexo;
        this.loaderService.hide();
        })
      .then(res => {
        setTimeout(() => {
          this.clear(); 
          this.messageService.add({ severity: 'success', detail: 'Tícket enviado com sucesso!' });
            }, 1000);
      })
      .catch(erro => {
        this.loaderService.hide();
        setTimeout(() => {
          this.errorHandler.handle(erro);
            }, 1000);
      });
  }

  finalizarTicket() {
    this.loaderService.show();
    this.ticketService.finalizar(this.ticket)
      .then(response => {
        this.ticket = response.ticketDto;
        this.loaderService.hide();
        })
      .then(res => {
        setTimeout(() => {
          this.onCloseFinalizar();
          this.messageService.add({ severity: 'success', detail: 'Tícket finalizado com sucesso!' });
            }, 1000);
      })
      .catch(erro => {
        this.loaderService.hide();
        setTimeout(() => {
          this.errorHandler.handle(erro);
            }, 1000);
      });
  }

  back() {
    this.routeStateService.loadPrevious();
  }

 /**
   * Convert File To Base64
   */
 convertFileToBase64(
  file: File,
  index: number,
  event: { target: { files: File[] }; files: any }
) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    let anexo = new Anexo();
    anexo.stringBase64 = reader.result as string;
    anexo.nomeArquivo = file.name;
    this.anexo.listaAnexoDto[index] = anexo;
    this.anexo.codigoTicket = this.ticket.id;
    if (this.ticket.id !== null){
      this.adicionar(event);
    }else{
      this.anexo.listaAnexoDto[index] = anexo;
    }
  };
}

  adicionar(event: any) {
    this.loaderService.show();
    console.log(event);
    this.anexoService
      .adicionar(this.anexo)
      .then((response) => {
        this.carregarAnexos(this.anexo.codigoTicket);
        this.loaderService.hide();
        this.messageService.add({
          severity: "success",
          detail: "Anexo adicionado com sucesso!",
        });
      })
      .then((response) => {
        event.files.length = 0;
        this.clear(); 
        this.idAnexoSelecao = false;
      })
      .catch((erro) => {
        this.loaderService.hide();
        this.errorHandler.handle(erro);
      });
  }  




download(nomeArquivo: string){
  this.loaderService.show();
  this.anexoService
  .download(nomeArquivo)
  .then((response) => {
    const file = new Blob([response], { type: response.type });
    var url = URL.createObjectURL(file);
    this.loaderService.hide();
    window.open(url);
  })
  .catch((erro) => {
    this.loaderService.hide();
    this.errorHandler.handle(erro);
  });
}

onCloseComplementoTicket(){
  this.displayModalComplemento = false;
}


salvarComplemento() {
  this.loaderService.show();
  this.complementoTicket.codigoTicket = this.ticket.id;
  this.complementoTicket.codigoUsuario = this.user.id;
  this.complementoTicket.tipoComplemento = 1;
  this.ticketService
    .salvarComplemento(this.complementoTicket)
    .then((response) => {
      this.loaderService.hide();
      this.complementosTicket = response;
      console.log(response);
      this.messageService.add({
        severity: "success",
        detail: "Complemento enviado com sucesso!",
      });
    }).then( (res) => {
      this.displayModalComplemento = false;
      this.editarTicket(this.ticket.id);
    })
    .catch((erro) => {
      this.loaderService.hide();
      this.errorHandler.handle(erro);
    });
}

visualizarComplementoTicket(codigo: number) {
  return this.ticketService.visualizarComplementoTicket(codigo)
  .then((complementoTicket) => {
    this.complementoTicket = complementoTicket.complementoTicketDto;
    console.log(this.complementoTicket);
  })
  .then((complementoTicket) => {
    this.displayModalComplemento = true;
  })    
  .catch(erro => this.errorHandler.handle(erro));
}


confirmarExclusaoComplementoTicket(codigoComplementoTicket: number) {
  this.confirmation.confirm({
    message: "Tem certeza que deseja excluir este complemento?",
    accept: () => {
      this.excluirComplementoTicket(codigoComplementoTicket);
    },
  });
}

excluirComplementoTicket(codigoComplementoTicket: number) {
  this.loaderService.show();
  this.ticketService
    .excluirComplementoTicket(codigoComplementoTicket)
    .then(() => {
      this.messageService.add({
        severity: "success",
        detail: "Complemento excluído com sucesso!",
      });
    })
    .then((response) => {
      this.loaderService.hide();
      this.editarTicket(this.ticket.id);
    })
    .catch((erro) => {
      this.loaderService.hide();
      this.errorHandler.handle(erro);
    });
}

}
