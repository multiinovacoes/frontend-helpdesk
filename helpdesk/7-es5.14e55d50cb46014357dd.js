function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{H4np:function(e,t,i){"use strict";i.d(t,"a",(function(){return H}));var o=i("McAE"),c=i("rUqY"),n=i("KesM"),a=i("fXoL"),l=i("HTAr"),r=i("50zW"),s=i("lwos"),d=i("7zfz"),u=i("qh/L"),b=i("XMFE"),m=i("4WRT"),p=i("24YL"),h=i("3Pt+"),f=i("7CaW"),v=i("7kUa"),k=i("arFO"),T=i("dgC2"),g=i("rEr+"),C=i("NCSE"),U=i("jIHw"),S=i("/RsI"),y=i("zFJ7"),M=i("ofXK"),x=["fileUpload"];function I(e,t){1&e&&(a.Ub(0,"tr"),a.Ub(1,"th"),a.Ic(2,"Complemento t\xedcket"),a.Tb(),a.Ub(3,"th"),a.Ic(4,"Data"),a.Tb(),a.Ub(5,"th"),a.Ic(6,"Enviado por"),a.Tb(),a.Pb(7,"th"),a.Tb())}function w(e,t){if(1&e){var i=a.Vb();a.Ub(0,"tr"),a.Ub(1,"td"),a.Ic(2),a.Tb(),a.Ub(3,"td"),a.Ic(4),a.gc(5,"date"),a.Tb(),a.Ub(6,"td"),a.Ic(7),a.Tb(),a.Ub(8,"td"),a.Ub(9,"button",41),a.cc("click",(function(){a.zc(i);var e=t.$implicit;return a.fc().visualizarComplementoTicket(e.id)})),a.Tb(),a.Ic(10,"\xa0 "),a.Ub(11,"button",42),a.cc("click",(function(){a.zc(i);var e=t.$implicit;return a.fc().confirmarExclusaoComplementoTicket(e.id)})),a.Tb(),a.Ic(12,"\xa0 "),a.Tb(),a.Tb()}if(2&e){var o=t.$implicit,c=a.fc();a.Cb(2),a.Kc(" ",o.descricaoComplemento," "),a.Cb(2),a.Kc(" ",a.ic(5,4,o.data,"dd/MM/yyyy HH:mm")," "),a.Cb(3),a.Kc(" ",o.descricaoUsuario," "),a.Cb(4),a.mc("disabled",4===c.ticket.status||5===c.ticket.status||2===o.tipoComplemento)}}function F(e,t){if(1&e&&(a.Ub(0,"li"),a.Ic(1),a.Tb()),2&e){var i=t.$implicit;a.Cb(1),a.Jc(i.name)}}function A(e,t){if(1&e&&(a.Ub(0,"ul"),a.Gc(1,F,2,1,"li",44),a.Tb()),2&e){var i=a.fc(2);a.Cb(1),a.mc("ngForOf",i.uploadedFiles)}}function z(e,t){if(1&e&&a.Gc(0,A,2,1,"ul",43),2&e){var i=a.fc();a.mc("ngIf",i.uploadedFiles.length)}}function q(e,t){1&e&&(a.Ub(0,"tr"),a.Ub(1,"th",45),a.Ic(2,"Nome do arquivo"),a.Tb(),a.Pb(3,"th",46),a.Pb(4,"th",46),a.Tb())}function P(e,t){if(1&e){var i=a.Vb();a.Ub(0,"tr"),a.Ub(1,"td"),a.Ic(2),a.Tb(),a.Ub(3,"td"),a.Ub(4,"button",47),a.cc("click",(function(){a.zc(i);var e=t.$implicit;return a.fc().download(e.nomeArquivo)})),a.Tb(),a.Ic(5,"\xa0 "),a.Tb(),a.Ub(6,"td"),a.Ub(7,"button",42),a.cc("click",(function(){a.zc(i);var e=t.$implicit;return a.fc().excluirAnexo(e.id)})),a.Tb(),a.Ic(8,"\xa0 "),a.Tb(),a.Tb()}if(2&e){var o=t.$implicit,c=a.fc();a.Cb(2),a.Kc(" ",o.nomeArquivo," "),a.Cb(5),a.mc("disabled",1!==c.ticket.status)}}var E=function(){return{height:"130px"}},B=function(){return{width:"50vw"}},H=function(){var e=function(){function e(t,i,a,l,r,s,d,u){_classCallCheck(this,e),this.ticketService=t,this.anexoService=i,this.loaderService=a,this.messageService=l,this.sessionService=r,this.confirmation=s,this.errorHandler=d,this.routeStateService=u,this.ticket=new c.a,this.fileName="",this.uploadedFiles=[],this.base64="Base64...",this.anexo=new o.a,this.complementoTicket=new n.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.carregaTipoTicket(),this.carregaPrioridade(),this.carregaStatus(),this.user=this.sessionService.getItem("currentUser");var e=this.routeStateService.getCurrent();e.data>0?this.editarTicket(e.data):(this.ticket.status=1,this.ticket.id=null)}},{key:"carregaTipoTicket",value:function(){return this.listaTicket=[{label:"Problema",value:1},{label:"Nova Funcionalidade",value:2},{label:"Solicita\xe7\xe3o de Acesso",value:3}],this.listaTicket}},{key:"carregaPrioridade",value:function(){return this.listaPrioridade=[{label:"Baixa",value:1},{label:"M\xe9dia",value:2},{label:"Alta",value:3}],this.listaPrioridade}},{key:"carregaStatus",value:function(){return this.listaStatus=[{label:"Aberto",value:1},{label:"Em atendimento",value:2},{label:"Aguardando complemento",value:3},{label:"Finalizado",value:4},{label:"Cancelado",value:5}],this.listaStatus}},{key:"carregaArquivo",value:function(e){for(var t=0;t<e.files.length;t++){var i=e.files[t];i&&this.convertFileToBase64(i,t,e)}}},{key:"editarTicket",value:function(e){var t=this;return this.ticketService.atendimentoTicket(e).then((function(e){t.ticket=e.ticketDto,t.anexos=t.ticket.listaAnexo,t.anexo.codigoTicket=t.ticket.id,t.complementosTicket=t.ticket.listaComplementoTicketDto})).catch((function(e){return t.errorHandler.handle(e)}))}},{key:"showComplementoTicket",value:function(){this.complementoTicket=new n.a,this.complementoTicket.codigoUsuarioResposta=null,this.complementoTicket.id=null,this.displayModalComplemento=!0}},{key:"showFinalizarTicket",value:function(){this.displayModalFinalizarTicket=!0}},{key:"onCloseFinalizar",value:function(){this.displayModalFinalizarTicket=!1}},{key:"excluirAnexo",value:function(e){this.confirmarExclusao(e)}},{key:"confirmarExclusao",value:function(e){var t=this;this.confirmation.confirm({message:"Tem certeza que deseja excluir este anexo?",accept:function(){t.excluir(e)}})}},{key:"excluir",value:function(e){var t=this;this.loaderService.show(),this.anexoService.excluir(e).then((function(){t.messageService.add({severity:"success",detail:"Anexo exclu\xeddo com sucesso!"})})).then((function(e){t.loaderService.hide(),t.carregarAnexos(t.ticket.id)})).catch((function(e){t.loaderService.hide(),t.errorHandler.handle(e)}))}},{key:"carregarAnexos",value:function(e){var t=this;this.loaderService.show(),null!==e?this.anexoService.listar(e).then((function(e){t.anexos=e})).then((function(){t.loaderService.hide()})):this.loaderService.hide()}},{key:"carregarComplementooTicket",value:function(e){var t=this;this.loaderService.show(),this.ticketService.listarComplementoTicket(e).then((function(e){t.complementosTicket=e})).then((function(){t.loaderService.hide()}))}},{key:"clear",value:function(){this.fileUpload.clear()}},{key:"salvar",value:function(e){var t=this;this.loaderService.show(),this.ticket.listaAnexoDto=this.anexo.listaAnexoDto,this.ticketService.adicionar(this.ticket).then((function(e){t.ticket=e.ticketDto,t.ticket.listaAnexoDto=null,t.anexos=t.ticket.listaAnexo,t.loaderService.hide()})).then((function(e){setTimeout((function(){t.clear(),t.messageService.add({severity:"success",detail:"T\xedcket enviado com sucesso!"})}),1e3)})).catch((function(e){t.loaderService.hide(),setTimeout((function(){t.errorHandler.handle(e)}),1e3)}))}},{key:"finalizarTicket",value:function(){var e=this;this.loaderService.show(),this.ticketService.finalizar(this.ticket).then((function(t){e.ticket=t.ticketDto,e.loaderService.hide()})).then((function(t){setTimeout((function(){e.onCloseFinalizar(),e.messageService.add({severity:"success",detail:"T\xedcket finalizado com sucesso!"})}),1e3)})).catch((function(t){e.loaderService.hide(),setTimeout((function(){e.errorHandler.handle(t)}),1e3)}))}},{key:"back",value:function(){this.routeStateService.loadPrevious()}},{key:"convertFileToBase64",value:function(e,t,i){var c=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){var a=new o.a;a.stringBase64=n.result,a.nomeArquivo=e.name,c.anexo.listaAnexoDto[t]=a,c.anexo.codigoTicket=c.ticket.id,null!==c.ticket.id?c.adicionar(i):c.anexo.listaAnexoDto[t]=a}}},{key:"adicionar",value:function(e){var t=this;this.loaderService.show(),console.log(e),this.anexoService.adicionar(this.anexo).then((function(e){t.carregarAnexos(t.anexo.codigoTicket),t.loaderService.hide(),t.messageService.add({severity:"success",detail:"Anexo adicionado com sucesso!"})})).then((function(i){e.files.length=0,t.clear(),t.idAnexoSelecao=!1})).catch((function(e){t.loaderService.hide(),t.errorHandler.handle(e)}))}},{key:"download",value:function(e){var t=this;this.loaderService.show(),this.anexoService.download(e).then((function(e){var i=new Blob([e],{type:e.type}),o=URL.createObjectURL(i);t.loaderService.hide(),window.open(o)})).catch((function(e){t.loaderService.hide(),t.errorHandler.handle(e)}))}},{key:"onCloseComplementoTicket",value:function(){this.displayModalComplemento=!1}},{key:"salvarComplemento",value:function(){var e=this;this.loaderService.show(),this.complementoTicket.codigoTicket=this.ticket.id,this.complementoTicket.codigoUsuario=this.user.id,this.complementoTicket.tipoComplemento=1,this.ticketService.salvarComplemento(this.complementoTicket).then((function(t){e.loaderService.hide(),e.complementosTicket=t,console.log(t),e.messageService.add({severity:"success",detail:"Complemento enviado com sucesso!"})})).then((function(t){e.displayModalComplemento=!1,e.editarTicket(e.ticket.id)})).catch((function(t){e.loaderService.hide(),e.errorHandler.handle(t)}))}},{key:"visualizarComplementoTicket",value:function(e){var t=this;return this.ticketService.visualizarComplementoTicket(e).then((function(e){t.complementoTicket=e.complementoTicketDto,console.log(t.complementoTicket)})).then((function(e){t.displayModalComplemento=!0})).catch((function(e){return t.errorHandler.handle(e)}))}},{key:"confirmarExclusaoComplementoTicket",value:function(e){var t=this;this.confirmation.confirm({message:"Tem certeza que deseja excluir este complemento?",accept:function(){t.excluirComplementoTicket(e)}})}},{key:"excluirComplementoTicket",value:function(e){var t=this;this.loaderService.show(),this.ticketService.excluirComplementoTicket(e).then((function(){t.messageService.add({severity:"success",detail:"Complemento exclu\xeddo com sucesso!"})})).then((function(e){t.loaderService.hide(),t.editarTicket(t.ticket.id)})).catch((function(e){t.loaderService.hide(),t.errorHandler.handle(e)}))}},{key:"editando",get:function(){return Boolean(this.ticket.id)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Ob(l.a),a.Ob(r.a),a.Ob(s.a),a.Ob(d.h),a.Ob(u.a),a.Ob(d.b),a.Ob(b.a),a.Ob(m.a))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-ticket-atendimento-cadastro"]],viewQuery:function(e,t){var i;1&e&&a.Mc(x,!0),2&e&&a.xc(i=a.dc())&&(t.fileUpload=i.first)},decls:76,vars:49,consts:[["autocomplete","off",3,"ngSubmit"],["f","ngForm"],[3,"header"],[1,"p-col-12","p-md-6","p-fluid"],["pInputText","","type","text","name","empresa","required","","minlength","3",3,"disabled","ngModel","ngModelChange"],["empresa","ngModel"],["name","codigoTipo","placeholder","Selecione","required","",3,"options","disabled","ngModel","ngModelChange"],["name","codigoPrioridade","placeholder","Selecione","required","",3,"options","disabled","ngModel","ngModelChange"],["name","status","placeholder","Selecione","required","",3,"options","disabled","ngModel","ngModelChange"],[1,"p-col-12","p-md-9","p-fluid"],["name","descricao","required","",3,"ngModel","readonly","ngModelChange"],[1,"p-field","p-col-9","p-fluid"],[3,"value","responsive"],["pTemplate","header"],["pTemplate","body"],["name","descricaoSolucaoTicket","required","",3,"ngModel","readonly","ngModelChange"],["name","anexo","id","anexo","invalidFileSizeMessageDetail","O tamanho m\xe1ximo permitido de arquivos \xe9 de 10","multiple","true","chooseLabel","Selecione o arquivo","accept","image/*,application/*",3,"auto","disabled","customUpload","maxFileSize","uploadHandler"],["fileUpload",""],["pTemplate","content"],[1,"p-field","p-col-9"],["pButton","","type","button","label","Complemento",1,"ui-button","prime-button",3,"disabled","click"],["pButton","","type","button","label","Finalizar",1,"ui-button","prime-button",3,"disabled","click"],["pButton","","type","button","label","Voltar",1,"ui-button-secondary","prime-button",3,"click"],["position","top",3,"header","visible","visibleChange"],["id","myFormComplemento","name","myFormComplemento","autocomplete","off",3,"ngSubmit"],["myFormComplemento","ngForm"],[1,"p-col-9","p-md-9","p-fluid"],[1,"p-field","p-col-12"],["rows","7","cols","25","name","descricaoComplemento","pInputTextarea","",3,"disabled","ngModel","ngModelChange"],["descricaoComplemento","ngModel"],[1,"p-field","p-col-12",3,"hidden"],["rows","7","cols","25","name","descricaoResposta","pInputTextarea","",3,"disabled","ngModel","ngModelChange"],["descricaoResposta","ngModel"],["pButton","","type","submit","label","Salvar",1,"ui-button-secondary","prime-button",3,"disabled"],["pButton","","type","button","label","Fechar",1,"ui-button-secondary","prime-button",3,"click"],["id","myFormFinalizarTicket","name","myFormFinalizarTicket","autocomplete","off",3,"ngSubmit"],[1,"card"],[1,"p-fluid","p-formgrid","p-grid"],["rows","7","cols","25","name","descricaoSolucao","pInputTextarea","",3,"ngModel","ngModelChange"],["descricaoSolucao","ngModel"],["pButton","","type","submit","label","Salvar",1,"ui-button-secondary","prime-button"],["pButton","","type","button","icon","pi pi-folder-open",3,"click"],["pButton","","type","button","icon","pi pi-trash",3,"disabled","click"],[4,"ngIf"],[4,"ngFor","ngForOf"],[2,"width","100px"],[2,"width","10px"],["pButton","","type","button","icon","pi pi-arrow-circle-down",3,"click"]],template:function(e,t){if(1&e){var i=a.Vb();a.Pb(0,"app-header-breadcrumb"),a.Ub(1,"form",0,1),a.cc("ngSubmit",(function(){a.zc(i);var e=a.yc(2);return t.salvar(e)})),a.Ub(3,"p-panel",2),a.Ub(4,"div",3),a.Ub(5,"label"),a.Ic(6,"Assunto *"),a.Tb(),a.Ub(7,"input",4,5),a.cc("ngModelChange",(function(e){return t.ticket.assunto=e})),a.Tb(),a.Tb(),a.Ub(9,"div",3),a.Ub(10,"label"),a.Ic(11,"Tipo *"),a.Tb(),a.Ub(12,"p-dropdown",6),a.cc("ngModelChange",(function(e){return t.ticket.codigoTipo=e})),a.Tb(),a.Tb(),a.Ub(13,"div",3),a.Ub(14,"label"),a.Ic(15,"Prioridade *"),a.Tb(),a.Ub(16,"p-dropdown",7),a.cc("ngModelChange",(function(e){return t.ticket.codigoPrioridade=e})),a.Tb(),a.Tb(),a.Ub(17,"div",3),a.Ub(18,"label"),a.Ic(19,"Status *"),a.Tb(),a.Ub(20,"p-dropdown",8),a.cc("ngModelChange",(function(e){return t.ticket.status=e})),a.Tb(),a.Tb(),a.Ub(21,"div",9),a.Ub(22,"label"),a.Ic(23,"Descri\xe7\xe3o do t\xedcket *"),a.Tb(),a.Ub(24,"p-editor",10),a.cc("ngModelChange",(function(e){return t.ticket.descricao=e})),a.Tb(),a.Tb(),a.Ub(25,"div",11),a.Ub(26,"p-table",12),a.Gc(27,I,8,0,"ng-template",13),a.Gc(28,w,13,7,"ng-template",14),a.Tb(),a.Tb(),a.Ub(29,"div",9),a.Ub(30,"label"),a.Ic(31,"Solu\xe7\xe3o do t\xedcket *"),a.Tb(),a.Ub(32,"p-editor",15),a.cc("ngModelChange",(function(e){return t.ticket.descricaoSolucao=e})),a.Tb(),a.Tb(),a.Ub(33,"div",11),a.Ub(34,"p-fileUpload",16,17),a.cc("uploadHandler",(function(e){return t.carregaArquivo(e)})),a.Gc(36,z,1,1,"ng-template",18),a.Tb(),a.Tb(),a.Ub(37,"div",19),a.Ub(38,"p-table",12),a.Gc(39,q,5,0,"ng-template",13),a.Gc(40,P,9,2,"ng-template",14),a.Tb(),a.Tb(),a.Ub(41,"p-footer"),a.Ub(42,"button",20),a.cc("click",(function(){return t.showComplementoTicket()})),a.Tb(),a.Ic(43,"\xa0 "),a.Ub(44,"button",21),a.cc("click",(function(){return t.showFinalizarTicket()})),a.Tb(),a.Ic(45,"\xa0 "),a.Ub(46,"button",22),a.cc("click",(function(){return t.back()})),a.Tb(),a.Ic(47," \xa0\xa0\xa0 * Campos obrigat\xf3rios "),a.Tb(),a.Tb(),a.Tb(),a.Ub(48,"p-dialog",23),a.cc("visibleChange",(function(e){return t.displayModalComplemento=e})),a.Ub(49,"form",24,25),a.cc("ngSubmit",(function(){return t.salvarComplemento()})),a.Ub(51,"div",26),a.Ub(52,"div",27),a.Ub(53,"label"),a.Ic(54,"Descri\xe7\xe3o do complemento"),a.Tb(),a.Ub(55,"textarea",28,29),a.cc("ngModelChange",(function(e){return t.complementoTicket.descricaoComplemento=e})),a.Tb(),a.Tb(),a.Ub(57,"div",30),a.Ub(58,"label"),a.Ic(59,"Resposta do complemento"),a.Tb(),a.Ub(60,"textarea",31,32),a.cc("ngModelChange",(function(e){return t.complementoTicket.descricaoResposta=e})),a.Tb(),a.Tb(),a.Tb(),a.Pb(62,"br"),a.Pb(63,"button",33),a.Ub(64,"button",34),a.cc("click",(function(){return t.onCloseComplementoTicket()})),a.Tb(),a.Tb(),a.Tb(),a.Ub(65,"p-dialog",23),a.cc("visibleChange",(function(e){return t.displayModalFinalizarTicket=e})),a.Ub(66,"form",35,25),a.cc("ngSubmit",(function(){return t.finalizarTicket()})),a.Ub(68,"div",36),a.Ub(69,"div",37),a.Ub(70,"div",27),a.Ub(71,"textarea",38,39),a.cc("ngModelChange",(function(e){return t.ticket.descricaoSolucao=e})),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Pb(73,"br"),a.Pb(74,"button",40),a.Ub(75,"button",34),a.cc("click",(function(){return t.onCloseFinalizar()})),a.Tb(),a.Tb(),a.Tb()}2&e&&(a.Cb(3),a.mc("header",null===t.ticket.id?"Abertura de Ticket":"T\xedcket n\xba "+t.ticket.numeroTicket+"/"+t.ticket.anoTicketGerado),a.Cb(4),a.mc("disabled",!0)("ngModel",t.ticket.assunto),a.Cb(5),a.mc("options",t.listaTicket)("disabled",1!==t.ticket.status)("ngModel",t.ticket.codigoTipo),a.Cb(4),a.mc("options",t.listaPrioridade)("disabled",!0)("ngModel",t.ticket.codigoPrioridade),a.Cb(4),a.mc("options",t.listaStatus)("disabled",!0)("ngModel",t.ticket.status),a.Cb(4),a.Ec(a.oc(45,E)),a.mc("ngModel",t.ticket.descricao)("readonly",1!==t.ticket.status),a.Cb(2),a.mc("value",t.complementosTicket)("responsive",!0),a.Cb(6),a.Ec(a.oc(46,E)),a.mc("ngModel",t.ticket.descricaoSolucao)("readonly",!0),a.Cb(2),a.mc("auto",!0)("disabled",4===t.ticket.status||5===t.ticket.status)("customUpload",!0)("maxFileSize",5e6),a.Cb(4),a.mc("value",t.anexos)("responsive",!0),a.Cb(4),a.mc("disabled",4===t.ticket.status||5===t.ticket.status),a.Cb(2),a.mc("disabled",4===t.ticket.status||5===t.ticket.status),a.Cb(4),a.Ec(a.oc(47,B)),a.mc("header","Complemento de Inform\xe7\xf5es do T\xedcket: "+t.ticket.numeroTicket+"/"+t.ticket.anoTicketGerado)("visible",t.displayModalComplemento),a.Cb(7),a.mc("disabled",null!==t.complementoTicket.codigoUsuarioResposta||2===t.complementoTicket.tipoComplemento)("ngModel",t.complementoTicket.descricaoComplemento),a.Cb(2),a.mc("hidden",2===t.complementoTicket.tipoComplemento||null===t.complementoTicket.codigoUsuarioResposta),a.Cb(3),a.mc("disabled",null!==t.complementoTicket.codigoUsuarioResposta)("ngModel",t.complementoTicket.descricaoResposta),a.Cb(3),a.mc("disabled",null!==t.complementoTicket.codigoUsuarioResposta||2===t.complementoTicket.tipoComplemento||null!==t.complementoTicket.id),a.Cb(2),a.Ec(a.oc(48,B)),a.mc("header","Finalizar T\xedcket: "+t.ticket.numeroTicket+"/"+t.ticket.anoTicketGerado)("visible",t.displayModalFinalizarTicket),a.Cb(6),a.mc("ngModel",t.ticket.descricaoSolucao))},directives:[p.a,h.l,h.g,h.h,f.a,h.a,v.a,h.k,h.c,h.f,h.i,k.a,T.a,g.a,d.j,C.a,d.f,U.b,S.a,y.a,M.k,M.j],pipes:[M.d],styles:[""]}),e}()},QMLg:function(e,t,i){"use strict";i.r(t);var o,c=i("ofXK"),n=i("tyNb"),a=i("q3/p"),l=i("H4np"),r=i("fXoL"),s=[{path:"",redirectTo:"ticket-atendimento-pesquisa"},{path:"ticket-atendimento-pesquisa",component:a.a,loadChildren:function(){return Promise.all([i.e(0),i.e(11)]).then(i.bind(null,"yRYa")).then((function(e){return e.TicketAtendimentoPesquisaModule}))}},{path:"ticket-atendimento-cadastro",component:l.a,loadChildren:function(){return Promise.all([i.e(0),i.e(10)]).then(i.bind(null,"PYt5")).then((function(e){return e.TicketAtendimentoCadastroModule}))}}],d=((o=function e(){_classCallCheck(this,e)}).\u0275mod=r.Mb({type:o}),o.\u0275inj=r.Lb({factory:function(e){return new(e||o)},imports:[[n.d.forChild(s)],n.d]}),o),u=i("EQGD");i.d(t,"TicketAtendimentoModule",(function(){return m}));var b,m=((b=function e(){_classCallCheck(this,e)}).\u0275mod=r.Mb({type:b}),b.\u0275inj=r.Lb({factory:function(e){return new(e||b)},imports:[[c.b,d,u.a]]}),b)},"q3/p":function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var o=i("fXoL"),c=i("HTAr"),n=i("XMFE"),a=i("7zfz"),l=i("jhN1"),r=i("4WRT"),s=i("24YL"),d=i("3Pt+"),u=i("7CaW"),b=i("LuMj"),m=i("rEr+"),p=i("jIHw"),h=i("ofXK"),f=["tabela"];function v(e,t){1&e&&(o.Ub(0,"tr"),o.Ub(1,"th"),o.Ic(2,"Cliente"),o.Tb(),o.Ub(3,"th"),o.Ic(4,"Assunto"),o.Tb(),o.Ub(5,"th"),o.Ic(6,"Data Abertura"),o.Tb(),o.Ub(7,"th"),o.Ic(8,"Solicitante"),o.Tb(),o.Ub(9,"th"),o.Ic(10,"Status"),o.Tb(),o.Pb(11,"th",16),o.Tb())}function k(e,t){if(1&e){var i=o.Vb();o.Ub(0,"tr",17),o.Ub(1,"td"),o.Ic(2),o.Tb(),o.Ub(3,"td"),o.Ic(4),o.Tb(),o.Ub(5,"td"),o.Ic(6),o.gc(7,"date"),o.Tb(),o.Ub(8,"td"),o.Ic(9),o.Tb(),o.Ub(10,"td"),o.Ic(11),o.Tb(),o.Ub(12,"td",16),o.Ub(13,"a",18),o.cc("click",(function(){o.zc(i);var e=t.$implicit;return o.fc().editarTicket(e.id)})),o.Tb(),o.Ub(14,"button",19),o.cc("click",(function(){o.zc(i);var e=t.$implicit;return o.fc().confirmarExclusao(e)})),o.Tb(),o.Tb(),o.Tb()}if(2&e){var c=t.$implicit;o.Fc("background-color",3===c.status?"#FFFACD":4===c.status?"#7FFFD4":5===c.status?"#FF6347":""),o.Cb(2),o.Kc(" ",c.descricaoCliente," "),o.Cb(2),o.Kc(" ",c.assunto," "),o.Cb(2),o.Kc(" ",o.ic(7,8,c.dataAbertura,"dd/MM/yyyy HH:mm")," "),o.Cb(3),o.Kc(" ",c.descricaoUsuario," "),o.Cb(2),o.Kc(" ",c.descricaoStatus," "),o.Cb(3),o.mc("disabled",4===c.status||5===c.status)}}var T=function(){var e=function(){function e(t,i,o,c,n,a){_classCallCheck(this,e),this.ticketService=t,this.errorHandler=i,this.messageService=o,this.title=c,this.confirmation=n,this.routeStateService=a,this.tickets=[],this.areas=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.title.setTitle("Pesquisa de t\xedcket"),this.status=0,this.carregaClientes(),this.codigoCliente=0,this.listar()}},{key:"carregaClientes",value:function(){return this.listaClientes=[{label:"Col\xe9gio Cat\xf3lica Tim\xf3teo",value:1},{label:"UBEC",value:2},{label:"Col\xe9gio Padre de Man",value:3},{label:"Centro Educacional Cat\xf3lica de Bras\xedlia",value:4},{label:"UCB",value:5},{label:"UNILESTE",value:6},{label:"FICR",value:7},{label:"UNICATOLICA",value:8},{label:"Col\xe9gio Cat\xf3lica de Curitiba",value:9},{label:"Col\xe9gio Cat\xf3lica Joinville",value:10},{label:"SENAI - Sistema Fiepe",value:11},{label:"SESC PERNAMBUCO",value:12},{label:"HOSPITAL BALBINO",value:13},{label:"PREFEITURA DO RECIFE",value:14}],this.listaClientes}},{key:"listar",value:function(){var e=this;this.ticketService.listarTodosAtendimentos().then((function(t){e.tickets=t.ticketDtoList})).catch((function(t){return e.errorHandler.handle(t)}))}},{key:"pesquisa",value:function(){var e=this;this.ticketService.listarStatus(this.codigoCliente,this.status).then((function(t){e.tickets=t.ticketDtoList})).catch((function(t){return e.errorHandler.handle(t)}))}},{key:"editarTicket",value:function(e){this.routeStateService.add("Atendimento de T\xedcket","/main/ticket-atendimento/ticket-atendimento-cadastro",e,!1)}},{key:"excluir",value:function(e){var t=this;this.ticketService.excluir(e.id).then((function(){t.messageService.add({severity:"success",detail:"T\xedcket exclu\xeddo com sucesso!"})})).catch((function(e){return t.errorHandler.handle(e)}))}},{key:"confirmarExclusao",value:function(e){var t=this;this.confirmation.confirm({message:"Tem certeza que deseja excluir?",accept:function(){t.excluir(e)}})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Ob(c.a),o.Ob(n.a),o.Ob(a.h),o.Ob(l.c),o.Ob(a.b),o.Ob(r.a))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-ticket-atendimento-pesquisa"]],viewQuery:function(e,t){var i;1&e&&o.Mc(f,!0),2&e&&o.xc(i=o.dc())&&(t.grid=i.first)},decls:31,vars:9,consts:[["autocomplete","off"],["f","ngForm"],["header","Lista de T\xedckets"],[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col-12"],[1,"p-formgroup-inline"],[1,"p-field-checkbox"],["name","pesquisaTodos","value","0","inputId","pesquisaTodos",3,"ngModel","click","ngModelChange"],["name","pesquisaAbertos","value","1","inputId","pesquisaAbertos",3,"ngModel","click","ngModelChange"],["name","pesquisaAtendimentos","value","2","inputId","pesquisaAtendimentos",3,"ngModel","click","ngModelChange"],["name","pesquisaComplemento","value","3","inputId","pesquisaComplemento",3,"ngModel","click","ngModelChange"],["name","pesquisaFinalizados","value","4","inputId","pesquisaFinalizados",3,"ngModel","click","ngModelChange"],["styleClass","p-datatable-sm p-datatable-striped",3,"value","paginator","rows","responsive"],["tabela",""],["pTemplate","header"],["pTemplate","body"],[1,"col-acoes"],[1,"col-status"],["pButton","","icon","pi pi-folder-open","pTooltip","Editar","tooltipPosition","top",3,"click"],["pButton","","icon","pi pi-trash","type","button","pTooltip","Excluir","tooltipPosition","top",3,"disabled","click"]],template:function(e,t){1&e&&(o.Pb(0,"app-header-breadcrumb"),o.Ub(1,"form",0,1),o.Ub(3,"p-panel",2),o.Ub(4,"div",3),o.Ub(5,"div",4),o.Ub(6,"div",5),o.Ub(7,"div",6),o.Ub(8,"p-radioButton",7),o.cc("click",(function(){return t.listar()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(9,"label"),o.Ic(10,"Todos"),o.Tb(),o.Tb(),o.Ub(11,"div",6),o.Ub(12,"p-radioButton",8),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(13,"label"),o.Ic(14,"Abertos"),o.Tb(),o.Tb(),o.Ub(15,"div",6),o.Ub(16,"p-radioButton",9),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(17,"label"),o.Ic(18,"Em atendimento"),o.Tb(),o.Tb(),o.Ub(19,"div",6),o.Ub(20,"p-radioButton",10),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(21,"label"),o.Ic(22,"Aguardando complemento"),o.Tb(),o.Tb(),o.Ub(23,"div",6),o.Ub(24,"p-radioButton",11),o.cc("click",(function(){return t.pesquisa()}))("ngModelChange",(function(e){return t.status=e})),o.Tb(),o.Ub(25,"label"),o.Ic(26,"Finalizados"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(27,"p-table",12,13),o.Gc(29,v,12,0,"ng-template",14),o.Gc(30,k,15,11,"ng-template",15),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Cb(8),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(4),o.mc("ngModel",t.status),o.Cb(3),o.mc("value",t.tickets)("paginator",!0)("rows",5)("responsive",!0))},directives:[s.a,d.l,d.g,d.h,u.a,b.a,d.f,d.i,m.a,a.j,p.b],pipes:[h.d],styles:[""]}),e}()}}]);