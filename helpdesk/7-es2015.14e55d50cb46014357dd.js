(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{H4np:function(e,t,i){"use strict";i.d(t,"a",(function(){return H}));var o=i("McAE"),c=i("rUqY"),a=i("KesM"),n=i("fXoL"),l=i("HTAr"),s=i("50zW"),r=i("lwos"),d=i("7zfz"),u=i("qh/L"),b=i("XMFE"),m=i("4WRT"),p=i("24YL"),h=i("3Pt+"),T=i("7CaW"),k=i("7kUa"),g=i("arFO"),v=i("dgC2"),f=i("rEr+"),C=i("NCSE"),U=i("jIHw"),S=i("/RsI"),M=i("zFJ7"),x=i("ofXK");const I=["fileUpload"];function y(e,t){1&e&&(n.Ub(0,"tr"),n.Ub(1,"th"),n.Ic(2,"Complemento t\xedcket"),n.Tb(),n.Ub(3,"th"),n.Ic(4,"Data"),n.Tb(),n.Ub(5,"th"),n.Ic(6,"Enviado por"),n.Tb(),n.Pb(7,"th"),n.Tb())}function F(e,t){if(1&e){const e=n.Vb();n.Ub(0,"tr"),n.Ub(1,"td"),n.Ic(2),n.Tb(),n.Ub(3,"td"),n.Ic(4),n.gc(5,"date"),n.Tb(),n.Ub(6,"td"),n.Ic(7),n.Tb(),n.Ub(8,"td"),n.Ub(9,"button",41),n.cc("click",(function(){n.zc(e);const i=t.$implicit;return n.fc().visualizarComplementoTicket(i.id)})),n.Tb(),n.Ic(10,"\xa0 "),n.Ub(11,"button",42),n.cc("click",(function(){n.zc(e);const i=t.$implicit;return n.fc().confirmarExclusaoComplementoTicket(i.id)})),n.Tb(),n.Ic(12,"\xa0 "),n.Tb(),n.Tb()}if(2&e){const e=t.$implicit,i=n.fc();n.Cb(2),n.Kc(" ",e.descricaoComplemento," "),n.Cb(2),n.Kc(" ",n.ic(5,4,e.data,"dd/MM/yyyy HH:mm")," "),n.Cb(3),n.Kc(" ",e.descricaoUsuario," "),n.Cb(4),n.mc("disabled",4===i.ticket.status||5===i.ticket.status||2===e.tipoComplemento)}}function w(e,t){if(1&e&&(n.Ub(0,"li"),n.Ic(1),n.Tb()),2&e){const e=t.$implicit;n.Cb(1),n.Jc(e.name)}}function A(e,t){if(1&e&&(n.Ub(0,"ul"),n.Gc(1,w,2,1,"li",44),n.Tb()),2&e){const e=n.fc(2);n.Cb(1),n.mc("ngForOf",e.uploadedFiles)}}function z(e,t){if(1&e&&n.Gc(0,A,2,1,"ul",43),2&e){const e=n.fc();n.mc("ngIf",e.uploadedFiles.length)}}function q(e,t){1&e&&(n.Ub(0,"tr"),n.Ub(1,"th",45),n.Ic(2,"Nome do arquivo"),n.Tb(),n.Pb(3,"th",46),n.Pb(4,"th",46),n.Tb())}function P(e,t){if(1&e){const e=n.Vb();n.Ub(0,"tr"),n.Ub(1,"td"),n.Ic(2),n.Tb(),n.Ub(3,"td"),n.Ub(4,"button",47),n.cc("click",(function(){n.zc(e);const i=t.$implicit;return n.fc().download(i.nomeArquivo)})),n.Tb(),n.Ic(5,"\xa0 "),n.Tb(),n.Ub(6,"td"),n.Ub(7,"button",42),n.cc("click",(function(){n.zc(e);const i=t.$implicit;return n.fc().excluirAnexo(i.id)})),n.Tb(),n.Ic(8,"\xa0 "),n.Tb(),n.Tb()}if(2&e){const e=t.$implicit,i=n.fc();n.Cb(2),n.Kc(" ",e.nomeArquivo," "),n.Cb(5),n.mc("disabled",1!==i.ticket.status)}}const E=function(){return{height:"130px"}},B=function(){return{width:"50vw"}};let H=(()=>{class e{constructor(e,t,i,n,l,s,r,d){this.ticketService=e,this.anexoService=t,this.loaderService=i,this.messageService=n,this.sessionService=l,this.confirmation=s,this.errorHandler=r,this.routeStateService=d,this.ticket=new c.a,this.fileName="",this.uploadedFiles=[],this.base64="Base64...",this.anexo=new o.a,this.complementoTicket=new a.a}ngOnInit(){this.carregaTipoTicket(),this.carregaPrioridade(),this.carregaStatus(),this.user=this.sessionService.getItem("currentUser");var e=this.routeStateService.getCurrent();e.data>0?this.editarTicket(e.data):(this.ticket.status=1,this.ticket.id=null)}carregaTipoTicket(){return this.listaTicket=[{label:"Problema",value:1},{label:"Nova Funcionalidade",value:2},{label:"Solicita\xe7\xe3o de Acesso",value:3}],this.listaTicket}carregaPrioridade(){return this.listaPrioridade=[{label:"Baixa",value:1},{label:"M\xe9dia",value:2},{label:"Alta",value:3}],this.listaPrioridade}carregaStatus(){return this.listaStatus=[{label:"Aberto",value:1},{label:"Em atendimento",value:2},{label:"Aguardando complemento",value:3},{label:"Finalizado",value:4},{label:"Cancelado",value:5}],this.listaStatus}carregaArquivo(e){for(let t=0;t<e.files.length;t++){const i=e.files[t];i&&this.convertFileToBase64(i,t,e)}}editarTicket(e){return this.ticketService.atendimentoTicket(e).then(e=>{this.ticket=e.ticketDto,this.anexos=this.ticket.listaAnexo,this.anexo.codigoTicket=this.ticket.id,this.complementosTicket=this.ticket.listaComplementoTicketDto}).catch(e=>this.errorHandler.handle(e))}showComplementoTicket(){this.complementoTicket=new a.a,this.complementoTicket.codigoUsuarioResposta=null,this.complementoTicket.id=null,this.displayModalComplemento=!0}showFinalizarTicket(){this.displayModalFinalizarTicket=!0}onCloseFinalizar(){this.displayModalFinalizarTicket=!1}get editando(){return Boolean(this.ticket.id)}excluirAnexo(e){this.confirmarExclusao(e)}confirmarExclusao(e){this.confirmation.confirm({message:"Tem certeza que deseja excluir este anexo?",accept:()=>{this.excluir(e)}})}excluir(e){this.loaderService.show(),this.anexoService.excluir(e).then(()=>{this.messageService.add({severity:"success",detail:"Anexo exclu\xeddo com sucesso!"})}).then(e=>{this.loaderService.hide(),this.carregarAnexos(this.ticket.id)}).catch(e=>{this.loaderService.hide(),this.errorHandler.handle(e)})}carregarAnexos(e){this.loaderService.show(),null!==e?this.anexoService.listar(e).then(e=>{this.anexos=e}).then(()=>{this.loaderService.hide()}):this.loaderService.hide()}carregarComplementooTicket(e){this.loaderService.show(),this.ticketService.listarComplementoTicket(e).then(e=>{this.complementosTicket=e}).then(()=>{this.loaderService.hide()})}clear(){this.fileUpload.clear()}salvar(e){this.loaderService.show(),this.ticket.listaAnexoDto=this.anexo.listaAnexoDto,this.ticketService.adicionar(this.ticket).then(e=>{this.ticket=e.ticketDto,this.ticket.listaAnexoDto=null,this.anexos=this.ticket.listaAnexo,this.loaderService.hide()}).then(e=>{setTimeout(()=>{this.clear(),this.messageService.add({severity:"success",detail:"T\xedcket enviado com sucesso!"})},1e3)}).catch(e=>{this.loaderService.hide(),setTimeout(()=>{this.errorHandler.handle(e)},1e3)})}finalizarTicket(){this.loaderService.show(),this.ticketService.finalizar(this.ticket).then(e=>{this.ticket=e.ticketDto,this.loaderService.hide()}).then(e=>{setTimeout(()=>{this.onCloseFinalizar(),this.messageService.add({severity:"success",detail:"T\xedcket finalizado com sucesso!"})},1e3)}).catch(e=>{this.loaderService.hide(),setTimeout(()=>{this.errorHandler.handle(e)},1e3)})}back(){this.routeStateService.loadPrevious()}convertFileToBase64(e,t,i){let c=new FileReader;c.readAsDataURL(e),c.onload=()=>{let a=new o.a;a.stringBase64=c.result,a.nomeArquivo=e.name,this.anexo.listaAnexoDto[t]=a,this.anexo.codigoTicket=this.ticket.id,null!==this.ticket.id?this.adicionar(i):this.anexo.listaAnexoDto[t]=a}}adicionar(e){this.loaderService.show(),console.log(e),this.anexoService.adicionar(this.anexo).then(e=>{this.carregarAnexos(this.anexo.codigoTicket),this.loaderService.hide(),this.messageService.add({severity:"success",detail:"Anexo adicionado com sucesso!"})}).then(t=>{e.files.length=0,this.clear(),this.idAnexoSelecao=!1}).catch(e=>{this.loaderService.hide(),this.errorHandler.handle(e)})}download(e){this.loaderService.show(),this.anexoService.download(e).then(e=>{const t=new Blob([e],{type:e.type});var i=URL.createObjectURL(t);this.loaderService.hide(),window.open(i)}).catch(e=>{this.loaderService.hide(),this.errorHandler.handle(e)})}onCloseComplementoTicket(){this.displayModalComplemento=!1}salvarComplemento(){this.loaderService.show(),this.complementoTicket.codigoTicket=this.ticket.id,this.complementoTicket.codigoUsuario=this.user.id,this.complementoTicket.tipoComplemento=1,this.ticketService.salvarComplemento(this.complementoTicket).then(e=>{this.loaderService.hide(),this.complementosTicket=e,console.log(e),this.messageService.add({severity:"success",detail:"Complemento enviado com sucesso!"})}).then(e=>{this.displayModalComplemento=!1,this.editarTicket(this.ticket.id)}).catch(e=>{this.loaderService.hide(),this.errorHandler.handle(e)})}visualizarComplementoTicket(e){return this.ticketService.visualizarComplementoTicket(e).then(e=>{this.complementoTicket=e.complementoTicketDto,console.log(this.complementoTicket)}).then(e=>{this.displayModalComplemento=!0}).catch(e=>this.errorHandler.handle(e))}confirmarExclusaoComplementoTicket(e){this.confirmation.confirm({message:"Tem certeza que deseja excluir este complemento?",accept:()=>{this.excluirComplementoTicket(e)}})}excluirComplementoTicket(e){this.loaderService.show(),this.ticketService.excluirComplementoTicket(e).then(()=>{this.messageService.add({severity:"success",detail:"Complemento exclu\xeddo com sucesso!"})}).then(e=>{this.loaderService.hide(),this.editarTicket(this.ticket.id)}).catch(e=>{this.loaderService.hide(),this.errorHandler.handle(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(l.a),n.Ob(s.a),n.Ob(r.a),n.Ob(d.h),n.Ob(u.a),n.Ob(d.b),n.Ob(b.a),n.Ob(m.a))},e.\u0275cmp=n.Ib({type:e,selectors:[["app-ticket-atendimento-cadastro"]],viewQuery:function(e,t){var i;1&e&&n.Mc(I,!0),2&e&&n.xc(i=n.dc())&&(t.fileUpload=i.first)},decls:76,vars:49,consts:[["autocomplete","off",3,"ngSubmit"],["f","ngForm"],[3,"header"],[1,"p-col-12","p-md-6","p-fluid"],["pInputText","","type","text","name","empresa","required","","minlength","3",3,"disabled","ngModel","ngModelChange"],["empresa","ngModel"],["name","codigoTipo","placeholder","Selecione","required","",3,"options","disabled","ngModel","ngModelChange"],["name","codigoPrioridade","placeholder","Selecione","required","",3,"options","disabled","ngModel","ngModelChange"],["name","status","placeholder","Selecione","required","",3,"options","disabled","ngModel","ngModelChange"],[1,"p-col-12","p-md-9","p-fluid"],["name","descricao","required","",3,"ngModel","readonly","ngModelChange"],[1,"p-field","p-col-9","p-fluid"],[3,"value","responsive"],["pTemplate","header"],["pTemplate","body"],["name","descricaoSolucaoTicket","required","",3,"ngModel","readonly","ngModelChange"],["name","anexo","id","anexo","invalidFileSizeMessageDetail","O tamanho m\xe1ximo permitido de arquivos \xe9 de 10","multiple","true","chooseLabel","Selecione o arquivo","accept","image/*,application/*",3,"auto","disabled","customUpload","maxFileSize","uploadHandler"],["fileUpload",""],["pTemplate","content"],[1,"p-field","p-col-9"],["pButton","","type","button","label","Complemento",1,"ui-button","prime-button",3,"disabled","click"],["pButton","","type","button","label","Finalizar",1,"ui-button","prime-button",3,"disabled","click"],["pButton","","type","button","label","Voltar",1,"ui-button-secondary","prime-button",3,"click"],["position","top",3,"header","visible","visibleChange"],["id","myFormComplemento","name","myFormComplemento","autocomplete","off",3,"ngSubmit"],["myFormComplemento","ngForm"],[1,"p-col-9","p-md-9","p-fluid"],[1,"p-field","p-col-12"],["rows","7","cols","25","name","descricaoComplemento","pInputTextarea","",3,"disabled","ngModel","ngModelChange"],["descricaoComplemento","ngModel"],[1,"p-field","p-col-12",3,"hidden"],["rows","7","cols","25","name","descricaoResposta","pInputTextarea","",3,"disabled","ngModel","ngModelChange"],["descricaoResposta","ngModel"],["pButton","","type","submit","label","Salvar",1,"ui-button-secondary","prime-button",3,"disabled"],["pButton","","type","button","label","Fechar",1,"ui-button-secondary","prime-button",3,"click"],["id","myFormFinalizarTicket","name","myFormFinalizarTicket","autocomplete","off",3,"ngSubmit"],[1,"card"],[1,"p-fluid","p-formgrid","p-grid"],["rows","7","cols","25","name","descricaoSolucao","pInputTextarea","",3,"ngModel","ngModelChange"],["descricaoSolucao","ngModel"],["pButton","","type","submit","label","Salvar",1,"ui-button-secondary","prime-button"],["pButton","","type","button","icon","pi pi-folder-open",3,"click"],["pButton","","type","button","icon","pi pi-trash",3,"disabled","click"],[4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","100px"],[2,"width","10px"],["pButton","","type","button","icon","pi pi-arrow-circle-down",3,"click"]],template:function(e,t){if(1&e){const e=n.Vb();n.Pb(0,"app-header-breadcrumb"),n.Ub(1,"form",0,1),n.cc("ngSubmit",(function(){n.zc(e);const i=n.yc(2);return t.salvar(i)})),n.Ub(3,"p-panel",2),n.Ub(4,"div",3),n.Ub(5,"label"),n.Ic(6,"Assunto *"),n.Tb(),n.Ub(7,"input",4,5),n.cc("ngModelChange",(function(e){return t.ticket.assunto=e})),n.Tb(),n.Tb(),n.Ub(9,"div",3),n.Ub(10,"label"),n.Ic(11,"Tipo *"),n.Tb(),n.Ub(12,"p-dropdown",6),n.cc("ngModelChange",(function(e){return t.ticket.codigoTipo=e})),n.Tb(),n.Tb(),n.Ub(13,"div",3),n.Ub(14,"label"),n.Ic(15,"Prioridade *"),n.Tb(),n.Ub(16,"p-dropdown",7),n.cc("ngModelChange",(function(e){return t.ticket.codigoPrioridade=e})),n.Tb(),n.Tb(),n.Ub(17,"div",3),n.Ub(18,"label"),n.Ic(19,"Status *"),n.Tb(),n.Ub(20,"p-dropdown",8),n.cc("ngModelChange",(function(e){return t.ticket.status=e})),n.Tb(),n.Tb(),n.Ub(21,"div",9),n.Ub(22,"label"),n.Ic(23,"Descri\xe7\xe3o do t\xedcket *"),n.Tb(),n.Ub(24,"p-editor",10),n.cc("ngModelChange",(function(e){return t.ticket.descricao=e})),n.Tb(),n.Tb(),n.Ub(25,"div",11),n.Ub(26,"p-table",12),n.Gc(27,y,8,0,"ng-template",13),n.Gc(28,F,13,7,"ng-template",14),n.Tb(),n.Tb(),n.Ub(29,"div",9),n.Ub(30,"label"),n.Ic(31,"Solu\xe7\xe3o do t\xedcket *"),n.Tb(),n.Ub(32,"p-editor",15),n.cc("ngModelChange",(function(e){return t.ticket.descricaoSolucao=e})),n.Tb(),n.Tb(),n.Ub(33,"div",11),n.Ub(34,"p-fileUpload",16,17),n.cc("uploadHandler",(function(e){return t.carregaArquivo(e)})),n.Gc(36,z,1,1,"ng-template",18),n.Tb(),n.Tb(),n.Ub(37,"div",19),n.Ub(38,"p-table",12),n.Gc(39,q,5,0,"ng-template",13),n.Gc(40,P,9,2,"ng-template",14),n.Tb(),n.Tb(),n.Ub(41,"p-footer"),n.Ub(42,"button",20),n.cc("click",(function(){return t.showComplementoTicket()})),n.Tb(),n.Ic(43,"\xa0 "),n.Ub(44,"button",21),n.cc("click",(function(){return t.showFinalizarTicket()})),n.Tb(),n.Ic(45,"\xa0 "),n.Ub(46,"button",22),n.cc("click",(function(){return t.back()})),n.Tb(),n.Ic(47," \xa0\xa0\xa0 * Campos obrigat\xf3rios "),n.Tb(),n.Tb(),n.Tb(),n.Ub(48,"p-dialog",23),n.cc("visibleChange",(function(e){return t.displayModalComplemento=e})),n.Ub(49,"form",24,25),n.cc("ngSubmit",(function(){return t.salvarComplemento()})),n.Ub(51,"div",26),n.Ub(52,"div",27),n.Ub(53,"label"),n.Ic(54,"Descri\xe7\xe3o do complemento"),n.Tb(),n.Ub(55,"textarea",28,29),n.cc("ngModelChange",(function(e){return t.complementoTicket.descricaoComplemento=e})),n.Tb(),n.Tb(),n.Ub(57,"div",30),n.Ub(58,"label"),n.Ic(59,"Resposta do complemento"),n.Tb(),n.Ub(60,"textarea",31,32),n.cc("ngModelChange",(function(e){return t.complementoTicket.descricaoResposta=e})),n.Tb(),n.Tb(),n.Tb(),n.Pb(62,"br"),n.Pb(63,"button",33),n.Ub(64,"button",34),n.cc("click",(function(){return t.onCloseComplementoTicket()})),n.Tb(),n.Tb(),n.Tb(),n.Ub(65,"p-dialog",23),n.cc("visibleChange",(function(e){return t.displayModalFinalizarTicket=e})),n.Ub(66,"form",35,25),n.cc("ngSubmit",(function(){return t.finalizarTicket()})),n.Ub(68,"div",36),n.Ub(69,"div",37),n.Ub(70,"div",27),n.Ub(71,"textarea",38,39),n.cc("ngModelChange",(function(e){return t.ticket.descricaoSolucao=e})),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Pb(73,"br"),n.Pb(74,"button",40),n.Ub(75,"button",34),n.cc("click",(function(){return t.onCloseFinalizar()})),n.Tb(),n.Tb(),n.Tb()}2&e&&(n.Cb(3),n.mc("header",null===t.ticket.id?"Abertura de Ticket":"T\xedcket n\xba "+t.ticket.numeroTicket+"/"+t.ticket.anoTicketGerado),n.Cb(4),n.mc("disabled",!0)("ngModel",t.ticket.assunto),n.Cb(5),n.mc("options",t.listaTicket)("disabled",1!==t.ticket.status)("ngModel",t.ticket.codigoTipo),n.Cb(4),n.mc("options",t.listaPrioridade)("disabled",!0)("ngModel",t.ticket.codigoPrioridade),n.Cb(4),n.mc("options",t.listaStatus)("disabled",!0)("ngModel",t.ticket.status),n.Cb(4),n.Ec(n.oc(45,E)),n.mc("ngModel",t.ticket.descricao)("readonly",1!==t.ticket.status),n.Cb(2),n.mc("value",t.complementosTicket)("responsive",!0),n.Cb(6),n.Ec(n.oc(46,E)),n.mc("ngModel",t.ticket.descricaoSolucao)("readonly",!0),n.Cb(2),n.mc("auto",!0)("disabled",4===t.ticket.status||5===t.ticket.status)("customUpload",!0)("maxFileSize",5e6),n.Cb(4),n.mc("value",t.anexos)("responsive",!0),n.Cb(4),n.mc("disabled",4===t.ticket.status||5===t.ticket.status),n.Cb(2),n.mc("disabled",4===t.ticket.status||5===t.ticket.status),n.Cb(4),n.Ec(n.oc(47,B)),n.mc("header","Complemento de Inform\xe7\xf5es do T\xedcket: "+t.ticket.numeroTicket+"/"+t.ticket.anoTicketGerado)("visible",t.displayModalComplemento),n.Cb(7),n.mc("disabled",null!==t.complementoTicket.codigoUsuarioResposta||2===t.complementoTicket.tipoComplemento)("ngModel",t.complementoTicket.descricaoComplemento),n.Cb(2),n.mc("hidden",2===t.complementoTicket.tipoComplemento||null===t.complementoTicket.codigoUsuarioResposta),n.Cb(3),n.mc("disabled",null!==t.complementoTicket.codigoUsuarioResposta)("ngModel",t.complementoTicket.descricaoResposta),n.Cb(3),n.mc("disabled",null!==t.complementoTicket.codigoUsuarioResposta||2===t.complementoTicket.tipoComplemento||null!==t.complementoTicket.id),n.Cb(2),n.Ec(n.oc(48,B)),n.mc("header","Finalizar T\xedcket: "+t.ticket.numeroTicket+"/"+t.ticket.anoTicketGerado)("visible",t.displayModalFinalizarTicket),n.Cb(6),n.mc("ngModel",t.ticket.descricaoSolucao))},directives:[p.a,h.l,h.g,h.h,T.a,h.a,k.a,h.k,h.c,h.f,h.i,g.a,v.a,f.a,d.j,C.a,d.f,U.b,S.a,M.a,x.k,x.j],pipes:[x.d],styles:[""]}),e})()},QMLg:function(e,t,i){"use strict";i.r(t);var o=i("ofXK"),c=i("tyNb"),a=i("q3/p"),n=i("H4np"),l=i("fXoL");const s=[{path:"",redirectTo:"ticket-atendimento-pesquisa"},{path:"ticket-atendimento-pesquisa",component:a.a,loadChildren:()=>Promise.all([i.e(0),i.e(11)]).then(i.bind(null,"yRYa")).then(e=>e.TicketAtendimentoPesquisaModule)},{path:"ticket-atendimento-cadastro",component:n.a,loadChildren:()=>Promise.all([i.e(0),i.e(10)]).then(i.bind(null,"PYt5")).then(e=>e.TicketAtendimentoCadastroModule)}];let r=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},imports:[[c.d.forChild(s)],c.d]}),e})();var d=i("EQGD");i.d(t,"TicketAtendimentoModule",(function(){return u}));let u=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},imports:[[o.b,r,d.a]]}),e})()},"q3/p":function(e,t,i){"use strict";i.d(t,"a",(function(){return v}));var o=i("fXoL"),c=i("HTAr"),a=i("XMFE"),n=i("7zfz"),l=i("jhN1"),s=i("4WRT"),r=i("24YL"),d=i("3Pt+"),u=i("7CaW"),b=i("LuMj"),m=i("rEr+"),p=i("jIHw"),h=i("ofXK");const T=["tabela"];function k(e,t){1&e&&(o.Ub(0,"tr"),o.Ub(1,"th"),o.Ic(2,"Cliente"),o.Tb(),o.Ub(3,"th"),o.Ic(4,"Assunto"),o.Tb(),o.Ub(5,"th"),o.Ic(6,"Data Abertura"),o.Tb(),o.Ub(7,"th"),o.Ic(8,"Solicitante"),o.Tb(),o.Ub(9,"th"),o.Ic(10,"Status"),o.Tb(),o.Pb(11,"th",16),o.Tb())}function g(e,t){if(1&e){const e=o.Vb();o.Ub(0,"tr",17),o.Ub(1,"td"),o.Ic(2),o.Tb(),o.Ub(3,"td"),o.Ic(4),o.Tb(),o.Ub(5,"td"),o.Ic(6),o.gc(7,"date"),o.Tb(),o.Ub(8,"td"),o.Ic(9),o.Tb(),o.Ub(10,"td"),o.Ic(11),o.Tb(),o.Ub(12,"td",16),o.Ub(13,"a",18),o.cc("click",(function(){o.zc(e);const i=t.$implicit;return o.fc().editarTicket(i.id)})),o.Tb(),o.Ub(14,"button",19),o.cc("click",(function(){o.zc(e);const i=t.$implicit;return o.fc().confirmarExclusao(i)})),o.Tb(),o.Tb(),o.Tb()}if(2&e){const e=t.$implicit;o.Fc("background-color",3===e.status?"#FFFACD":4===e.status?"#7FFFD4":5===e.status?"#FF6347":""),o.Cb(2),o.Kc(" ",e.descricaoCliente," "),o.Cb(2),o.Kc(" ",e.assunto," "),o.Cb(2),o.Kc(" ",o.ic(7,8,e.dataAbertura,"dd/MM/yyyy HH:mm")," "),o.Cb(3),o.Kc(" ",e.descricaoUsuario," "),o.Cb(2),o.Kc(" ",e.descricaoStatus," "),o.Cb(3),o.mc("disabled",4===e.status||5===e.status)}}let v=(()=>{class e{constructor(e,t,i,o,c,a){this.ticketService=e,this.errorHandler=t,this.messageService=i,this.title=o,this.confirmation=c,this.routeStateService=a,this.tickets=[],this.areas=[]}ngOnInit(){this.title.setTitle("Pesquisa de t\xedcket"),this.status=0,this.carregaClientes(),this.codigoCliente=0,this.listar()}carregaClientes(){return this.listaClientes=[{label:"Col\xe9gio Cat\xf3lica Tim\xf3teo",value:1},{label:"UBEC",value:2},{label:"Col\xe9gio Padre de Man",value:3},{label:"Centro Educacional Cat\xf3lica de Bras\xedlia",value:4},{label:"UCB",value:5},{label:"UNILESTE",value:6},{label:"FICR",value:7},{label:"UNICATOLICA",value:8},{label:"Col\xe9gio Cat\xf3lica de Curitiba",value:9},{label:"Col\xe9gio Cat\xf3lica Joinville",value:10},{label:"SENAI - Sistema Fiepe",value:11},{label:"SESC PERNAMBUCO",value:12},{label:"HOSPITAL BALBINO",value:13},{label:"PREFEITURA DO RECIFE",value:14}],this.listaClientes}listar(){this.ticketService.listarTodosAtendimentos().then(e=>{this.tickets=e.ticketDtoList}).catch(e=>this.errorHandler.handle(e))}pesquisa(){this.ticketService.listarStatus(this.codigoCliente,this.status).then(e=>{this.tickets=e.ticketDtoList}).catch(e=>this.errorHandler.handle(e))}editarTicket(e){this.routeStateService.add("Atendimento de T\xedcket","/main/ticket-atendimento/ticket-atendimento-cadastro",e,!1)}excluir(e){this.ticketService.excluir(e.id).then(()=>{this.messageService.add({severity:"success",detail:"T\xedcket exclu\xeddo com sucesso!"})}).catch(e=>this.errorHandler.handle(e))}confirmarExclusao(e){this.confirmation.confirm({message:"Tem certeza que deseja excluir?",accept:()=>{this.excluir(e)}})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(c.a),o.Ob(a.a),o.Ob(n.h),o.Ob(l.c),o.Ob(n.b),o.Ob(s.a))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-ticket-atendimento-pesquisa"]],viewQuery:function(e,t){var i;1&e&&o.Mc(T,!0),2&e&&o.xc(i=o.dc())&&(t.grid=i.first)},decls:31,vars:9,consts:[["autocomplete","off"],["f","ngForm"],["header","Lista de T\xedckets"],[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col-12"],[1,"p-formgroup-inline"],[1,"p-field-checkbox"],["name","pesquisaTodos","value","0","inputId","pesquisaTodos",3,"ngModel","click","ngModelChange"],["name","pesquisaAbertos","value","1","inputId","pesquisaAbertos",3,"ngModel","click","ngModelChange"],["name","pesquisaAtendimentos","value","2","inputId","pesquisaAtendimentos",3,"ngModel","click","ngModelChange"],["name","pesquisaComplemento","value","3","inputId","pesquisaComplemento",3,"ngModel","click","ngModelChange"],["name","pesquisaFinalizados","value","4","inputId","pesquisaFinalizados",3,"ngModel","click","ngModelChange"],["styleClass","p-datatable-sm p-datatable-striped",3,"value","paginator","rows","responsive"],["tabela",""],["pTemplate","header"],["pTemplate","body"],[1,"col-acoes"],[1,"col-status"],["pButton","","icon","pi pi-folder-open","pTooltip","Editar","tooltipPosition","top",3,"click"],["pButton","","icon","pi pi-trash","type","button","pTooltip","Excluir","tooltipPosition","top",3,"disabled","click"]],template:function(e,t){1&e&&(o.Pb(0,"app-header-breadcrumb"),o.Ub(1,"form",0,1),o.Ub(3,"p-panel",2),o.Ub(4,"div",3),o.Ub(5,"div",4),o.Ub(6,"div",5),o.Ub(7,"div",6),o.Ub(8,"p-radioButton",7),o.cc("click",(function(){return t.listar()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(9,"label"),o.Ic(10,"Todos"),o.Tb(),o.Tb(),o.Ub(11,"div",6),o.Ub(12,"p-radioButton",8),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(13,"label"),o.Ic(14,"Abertos"),o.Tb(),o.Tb(),o.Ub(15,"div",6),o.Ub(16,"p-radioButton",9),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(17,"label"),o.Ic(18,"Em atendimento"),o.Tb(),o.Tb(),o.Ub(19,"div",6),o.Ub(20,"p-radioButton",10),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(21,"label"),o.Ic(22,"Aguardando complemento"),o.Tb(),o.Tb(),o.Ub(23,"div",6),o.Ub(24,"p-radioButton",11),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(25,"label"),o.Ic(26,"Finalizados"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(27,"p-table",12,13),o.Gc(29,k,12,0,"ng-template",14),o.Gc(30,g,15,11,"ng-template",15),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Cb(8),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(3),o.mc("value",t.tickets)("paginator",!0)("rows",5)("responsive",!0))},directives:[r.a,d.l,d.g,d.h,u.a,b.a,d.f,d.i,m.a,n.j,p.b],pipes:[h.d],styles:[""]}),e})()}}]);